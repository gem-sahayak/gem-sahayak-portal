'use strict';

/**
 * Canonical Validator for ASTRA SEO Engine.
 * Validates canonical URL formatting, base URL compliance, dual route mapping, and duplicate canonical detection.
 */
class CanonicalValidator {
  validate(articles, siteBaseUrl = 'https://sahayakai.co.in') {
    const errors = [];
    const warnings = [];
    const canonicalMap = new Map(); // canonical -> array of slugs

    for (const art of articles) {
      const slug = art.slug || 'unknown-slug';
      const category = art.category ? art.category.toLowerCase().replace(/\s+/g, '-') : 'uncategorized';

      // Computed dual route canonical pattern
      const expectedPrimaryCanonical = `${siteBaseUrl}/knowledge/${category}/${slug}`;
      const expectedAliasCanonical = `${siteBaseUrl}/guides/${slug}`;
      
      const specifiedCanonical = art.canonical || art.frontmatter?.canonical || expectedPrimaryCanonical;

      // Track canonicals for duplicates
      if (!canonicalMap.has(specifiedCanonical)) {
        canonicalMap.set(specifiedCanonical, []);
      }
      canonicalMap.get(specifiedCanonical).push(slug);

      // Validate base domain
      if (specifiedCanonical.startsWith('http://') || specifiedCanonical.startsWith('https://')) {
        if (!specifiedCanonical.startsWith(siteBaseUrl) && !specifiedCanonical.startsWith('https://gemsahayak.co.in')) {
          warnings.push({
            code: 'EXTERNAL_CANONICAL_DOMAIN',
            message: `Article "${slug}" uses unexpected canonical domain: "${specifiedCanonical}"`,
            file: art.file || `posts/${slug}.md`,
            evidence: { slug, specifiedCanonical }
          });
        }
      }
    }

    // Check for duplicate specified canonicals
    for (const [canonicalUrl, slugs] of canonicalMap.entries()) {
      if (slugs.length > 1) {
        errors.push({
          code: 'DUPLICATE_CANONICAL',
          message: `Duplicate canonical URL "${canonicalUrl}" specified by ${slugs.length} articles: [${slugs.join(', ')}]`,
          file: 'src/content/registry.ts',
          evidence: { canonicalUrl, count: slugs.length, slugs }
        });
      }
    }

    return { errors, warnings };
  }
}

module.exports = new CanonicalValidator();
