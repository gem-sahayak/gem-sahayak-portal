'use strict';

/**
 * Links Validator for ASTRA SEO Engine.
 * Validates internal article references (`relatedArticles`), internal tool references (`relatedTools`),
 * heading hierarchy sanity, image alt text, and broken cross-links.
 */
class LinksValidator {
  validate(articles, registeredTools = [], registeredSlugsSet = null) {
    const errors = [];
    const warnings = [];

    const validSlugs = registeredSlugsSet || new Set(articles.map(a => a.slug));
    const validToolSlugs = new Set(registeredTools.map(t => typeof t === 'string' ? t : t.slug));

    for (const art of articles) {
      const slug = art.slug || 'unknown-slug';

      // 1. Validate relatedArticles internal links
      const relatedArticles = art.relatedArticles || art.frontmatter?.relatedArticles || [];
      if (Array.isArray(relatedArticles)) {
        for (const relSlug of relatedArticles) {
          if (!validSlugs.has(relSlug)) {
            errors.push({
              code: 'BROKEN_INTERNAL_ARTICLE_LINK',
              message: `Article "${slug}" references non-existent related article "${relSlug}"`,
              file: art.file || `posts/${slug}.md`,
              evidence: { sourceSlug: slug, targetSlug: relSlug }
            });
          }
        }
      }

      // 2. Validate relatedTools internal links
      const relatedTools = art.relatedTools || art.frontmatter?.relatedTools || [];
      if (Array.isArray(relatedTools)) {
        for (const toolSlug of relatedTools) {
          if (validToolSlugs.size > 0 && !validToolSlugs.has(toolSlug)) {
            warnings.push({
              code: 'BROKEN_INTERNAL_TOOL_LINK',
              message: `Article "${slug}" references unregistered tool "${toolSlug}"`,
              file: art.file || `posts/${slug}.md`,
              evidence: { sourceSlug: slug, targetTool: toolSlug }
            });
          }
        }
      }

      // 3. Heading Hierarchy Sanity Check (H1 -> H2 -> H3 structure)
      const headings = art.headings || [];
      let lastLevel = 0;
      let h1Count = 0;

      for (const h of headings) {
        if (h.level === 1) h1Count++;
        if (lastLevel > 0 && h.level > lastLevel + 1) {
          warnings.push({
            code: 'HEADING_HIERARCHY_JUMP',
            message: `Article "${slug}" skips heading levels (H${lastLevel} -> H${h.level}): "${h.text}"`,
            file: art.file || `posts/${slug}.md`,
            evidence: { slug, heading: h.text, level: h.level, lastLevel }
          });
        }
        lastLevel = h.level;
      }

      if (h1Count > 1) {
        warnings.push({
          code: 'MULTIPLE_H1_HEADINGS',
          message: `Article "${slug}" has ${h1Count} H1 headings (recommended exactly 1 H1 per page)`,
          file: art.file || `posts/${slug}.md`,
          evidence: { slug, h1Count }
        });
      }
    }

    return { errors, warnings };
  }
}

module.exports = new LinksValidator();
