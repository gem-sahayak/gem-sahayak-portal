/**
 * SEO Validation Engine
 * Path: /src/lib/seo/validation.ts
 * Description: Programmatic validation rules to prevent SEO regressions, missing metadata, duplicate titles, and broken canonical links.
 */

import { REGISTRY_ARTICLES, REGISTRY_CATEGORIES, REGISTRY_TOOLS, REGISTRY_FAQS } from '@/content/registry';

export interface ValidationIssue {
  type: 'ERROR' | 'WARNING';
  target: string;
  rule: string;
  message: string;
}

export interface ValidationReport {
  isValid: boolean;
  issues: ValidationIssue[];
  totalChecked: number;
}

/**
 * Validates the entire content registry to ensure strict SEO compliance before building.
 */
export function validateRegistry(): ValidationReport {
  const issues: ValidationIssue[] = [];
  const titles = new Set<string>();
  const slugs = new Set<string>();
  let totalChecked = 0;

  // 1. Validate Categories
  for (const category of Object.values(REGISTRY_CATEGORIES)) {
    totalChecked++;
    
    // Check Slug Duplication
    if (slugs.has(category.slug)) {
      issues.push({
        type: 'ERROR',
        target: `category:${category.slug}`,
        rule: 'duplicate-slug',
        message: `Duplicate slug detected in registry categories: ${category.slug}`
      });
    }
    slugs.add(category.slug);

    // Validate Metadata Description
    if (!category.description || category.description.length < 30) {
      issues.push({
        type: 'WARNING',
        target: `category:${category.slug}`,
        rule: 'missing-metadata',
        message: 'Category metadata description is missing or too short.'
      });
    }
  }

  // 2. Validate Tools
  for (const tool of Object.values(REGISTRY_TOOLS)) {
    totalChecked++;

    // Check Slug Duplication
    if (slugs.has(tool.slug)) {
      issues.push({
        type: 'ERROR',
        target: `tool:${tool.slug}`,
        rule: 'duplicate-slug',
        message: `Duplicate slug detected: ${tool.slug}`
      });
    }
    slugs.add(tool.slug);

    // Check Title/Name Duplication
    if (titles.has(tool.name)) {
      issues.push({
        type: 'ERROR',
        target: `tool:${tool.slug}`,
        rule: 'duplicate-title',
        message: `Duplicate tool title: ${tool.name}`
      });
    }
    titles.add(tool.name);

    // Validate Schema Elements
    if (!tool.headline || !tool.description) {
      issues.push({
        type: 'ERROR',
        target: `tool:${tool.slug}`,
        rule: 'missing-metadata',
        message: 'Tool is missing critical headline or description fields.'
      });
    }
  }

  // 3. Validate Articles
  for (const article of REGISTRY_ARTICLES) {
    totalChecked++;

    // Check Slug Duplication
    if (slugs.has(article.slug)) {
      issues.push({
        type: 'ERROR',
        target: `article:${article.slug}`,
        rule: 'duplicate-slug',
        message: `Duplicate article slug: ${article.slug}`
      });
    }
    slugs.add(article.slug);

    // Check Title Duplication
    if (titles.has(article.title)) {
      issues.push({
        type: 'ERROR',
        target: `article:${article.slug}`,
        rule: 'duplicate-title',
        message: `Duplicate article title: ${article.title}`
      });
    }
    titles.add(article.title);

    // Check Meta Description Length
    if (!article.summary || article.summary.length < 50 || article.summary.length > 160) {
      issues.push({
        type: 'WARNING',
        target: `article:${article.slug}`,
        rule: 'metadata-length',
        message: `Article meta description length (${article.summary?.length || 0}) is not optimal (target 50-160 chars).`
      });
    }

    // Verify parent category exists
    const categorySlug = article.category.toLowerCase().replace(/\s+/g, '-');
    if (!REGISTRY_CATEGORIES[categorySlug]) {
      issues.push({
        type: 'ERROR',
        target: `article:${article.slug}`,
        rule: 'broken-parent-link',
        message: `Article references category "${article.category}" but the corresponding category slug "${categorySlug}" is not registered.`
      });
    }

    // Verify related articles exist
    if (article.relatedArticles) {
      for (const relSlug of article.relatedArticles) {
        if (!REGISTRY_ARTICLES.find(a => a.slug === relSlug)) {
          issues.push({
            type: 'WARNING',
            target: `article:${article.slug}`,
            rule: 'broken-internal-link',
            message: `Article references related article slug "${relSlug}" which does not exist in registry.`
          });
        }
      }
    }

    // Verify related tools exist
    if (article.relatedTools) {
      for (const toolSlug of article.relatedTools) {
        if (!REGISTRY_TOOLS[toolSlug]) {
          issues.push({
            type: 'WARNING',
            target: `article:${article.slug}`,
            rule: 'broken-tool-link',
            message: `Article references related tool slug "${toolSlug}" which does not exist in registry.`
          });
        }
      }
    }
  }

  // 4. Validate Standalone FAQs
  for (const faq of Object.values(REGISTRY_FAQS)) {
    totalChecked++;

    if (slugs.has(faq.slug)) {
      issues.push({
        type: 'ERROR',
        target: `faq:${faq.slug}`,
        rule: 'duplicate-slug',
        message: `Duplicate FAQ slug: ${faq.slug}`
      });
    }
    slugs.add(faq.slug);
  }

  const errors = issues.filter(issue => issue.type === 'ERROR');

  return {
    isValid: errors.length === 0,
    issues,
    totalChecked
  };
}
