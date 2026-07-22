'use strict';

/**
 * Title Validator for ASTRA SEO Engine.
 * Checks title presence, min/max lengths, and title uniqueness across articles.
 */
class TitleValidator {
  validate(articles) {
    const errors = [];
    const warnings = [];
    const titleMap = new Map(); // title -> array of slugs

    for (const art of articles) {
      const title = art.title ? String(art.title).trim() : '';
      const slug = art.slug || 'unknown-slug';

      // Missing or Empty Title
      if (!title) {
        errors.push({
          code: 'MISSING_TITLE',
          message: `Article "${slug}" is missing a title tag`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug }
        });
        continue;
      }

      // Track titles for duplicate detection
      const lowerTitle = title.toLowerCase();
      if (!titleMap.has(lowerTitle)) {
        titleMap.set(lowerTitle, []);
      }
      titleMap.get(lowerTitle).push(slug);

      // Short Title Warning (< 15 chars)
      if (title.length < 15) {
        warnings.push({
          code: 'SHORT_TITLE',
          message: `Article "${slug}" has a short title (${title.length} chars, recommended >= 15)`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug, titleLength: title.length, title }
        });
      }

      // Long Title Warning (> 70 chars)
      if (title.length > 70) {
        warnings.push({
          code: 'LONG_TITLE',
          message: `Article "${slug}" title exceeds recommended search length (${title.length} chars, recommended <= 70)`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug, titleLength: title.length, title }
        });
      }
    }

    // Duplicate Title Detection
    for (const [lowerTitle, slugs] of titleMap.entries()) {
      if (slugs.length > 1) {
        errors.push({
          code: 'DUPLICATE_TITLE',
          message: `Duplicate title "${lowerTitle}" shared across ${slugs.length} articles: [${slugs.join(', ')}]`,
          file: 'src/content/registry.ts',
          evidence: { title: lowerTitle, count: slugs.length, slugs }
        });
      }
    }

    return { errors, warnings };
  }
}

module.exports = new TitleValidator();
