'use strict';

/**
 * Registry Validator for ASTRA SEO Engine.
 * Validates Category consistency, Hub & Spoke structural integrity, and schema compliance.
 */
class RegistryValidator {
  validate(parsedRegistry) {
    const errors = [];
    const warnings = [];

    const categories = parsedRegistry.categories || [];
    const articles = parsedRegistry.articles || [];

    const categorySlugs = new Set(categories.map(c => typeof c === 'string' ? c : c.slug));
    const articlesPerCategory = new Map();

    for (const catSlug of categorySlugs) {
      articlesPerCategory.set(catSlug, []);
    }

    for (const art of articles) {
      const artCategory = art.category ? art.category.toLowerCase().replace(/\s+/g, '-') : '';

      if (artCategory && !categorySlugs.has(artCategory)) {
        warnings.push({
          code: 'UNAPPROVED_CATEGORY',
          message: `Article "${art.slug}" uses category "${art.category}" which is not defined in REGISTRY_CATEGORIES`,
          file: 'src/content/registry.ts',
          evidence: { slug: art.slug, category: art.category }
        });
      } else if (artCategory) {
        articlesPerCategory.get(artCategory).push(art.slug);
      }
    }

    // Check for empty category hubs (categories with 0 spoke articles)
    for (const [catSlug, spokeSlugs] of articlesPerCategory.entries()) {
      if (spokeSlugs.length === 0) {
        warnings.push({
          code: 'EMPTY_CATEGORY_HUB',
          message: `Category Hub "${catSlug}" has 0 registered spoke articles`,
          file: 'src/content/registry.ts',
          evidence: { category: catSlug, spokeCount: 0 }
        });
      }
    }

    return { errors, warnings };
  }
}

module.exports = new RegistryValidator();
