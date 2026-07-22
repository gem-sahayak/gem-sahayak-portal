'use strict';

/**
 * Description Validator for ASTRA SEO Engine.
 * Checks meta description presence, min/max lengths, and description uniqueness across articles.
 */
class DescriptionValidator {
  validate(articles) {
    const errors = [];
    const warnings = [];
    const descMap = new Map(); // description -> array of slugs

    for (const art of articles) {
      const summary = art.summary || art.description || (art.frontmatter ? art.frontmatter.summary || art.frontmatter.description : '');
      const desc = summary ? String(summary).trim() : '';
      const slug = art.slug || 'unknown-slug';

      // Missing or Empty Description
      if (!desc) {
        errors.push({
          code: 'MISSING_DESCRIPTION',
          message: `Article "${slug}" is missing a meta description / summary`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug }
        });
        continue;
      }

      // Track descriptions for duplicate detection
      const lowerDesc = desc.toLowerCase();
      if (!descMap.has(lowerDesc)) {
        descMap.set(lowerDesc, []);
      }
      descMap.get(lowerDesc).push(slug);

      // Short Description Warning (< 50 chars)
      if (desc.length < 50) {
        warnings.push({
          code: 'SHORT_DESCRIPTION',
          message: `Article "${slug}" has a short description (${desc.length} chars, recommended >= 50)`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug, descLength: desc.length }
        });
      }

      // Long Description Warning (> 160 chars)
      if (desc.length > 160) {
        warnings.push({
          code: 'LONG_DESCRIPTION',
          message: `Article "${slug}" description exceeds recommended search length (${desc.length} chars, recommended <= 160)`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug, descLength: desc.length }
        });
      }
    }

    // Duplicate Description Detection
    for (const [lowerDesc, slugs] of descMap.entries()) {
      if (slugs.length > 1) {
        warnings.push({
          code: 'DUPLICATE_DESCRIPTION',
          message: `Duplicate meta description shared across ${slugs.length} articles: [${slugs.join(', ')}]`,
          file: 'src/content/registry.ts',
          evidence: { count: slugs.length, slugs, sample: lowerDesc.substring(0, 60) + '...' }
        });
      }
    }

    return { errors, warnings };
  }
}

module.exports = new DescriptionValidator();
