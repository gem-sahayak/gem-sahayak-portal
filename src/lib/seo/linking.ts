/**
 * Internal Linking Engine
 * Path: /src/lib/seo/linking.ts
 * Description: Dynamic internal link resolution based on taxonomic properties, categories, and semantic proximity.
 */

import { 
  REGISTRY_ARTICLES, 
  REGISTRY_CATEGORIES, 
  REGISTRY_TOOLS, 
  REGISTRY_FAQS,
  RegistryArticle,
  RegistryCategory,
  RegistryTool,
  RegistryFAQ
} from '@/content/registry';

/**
 * Finds articles within the same category to establish horizontal silo linking.
 */
export function getRelatedArticles(articleSlug: string, limit: number = 3): RegistryArticle[] {
  const current = REGISTRY_ARTICLES.find(a => a.slug === articleSlug);
  if (!current) return [];

  // 1. First choice: explicit related articles from registry
  if (current.relatedArticles && current.relatedArticles.length > 0) {
    const explicit = current.relatedArticles
      .map(slug => REGISTRY_ARTICLES.find(a => a.slug === slug))
      .filter((a): a is RegistryArticle => !!a);
    if (explicit.length >= limit) return explicit.slice(0, limit);
  }

  // 2. Fallback: match category
  const matches = REGISTRY_ARTICLES.filter(
    a => a.slug !== articleSlug && a.category === current.category
  );
  
  const explicitList = current.relatedArticles || [];
  const merged = [
    ...matches.filter(a => explicitList.includes(a.slug)),
    ...matches.filter(a => !explicitList.includes(a.slug))
  ];

  return merged.slice(0, limit);
}

/**
 * Resolves related tools mapped explicitly or contextually by category.
 */
export function getRelatedTools(articleSlug: string, limit: number = 2): RegistryTool[] {
  const current = REGISTRY_ARTICLES.find(a => a.slug === articleSlug);
  if (!current) return [];

  if (current.relatedTools && current.relatedTools.length > 0) {
    return current.relatedTools
      .map(slug => REGISTRY_TOOLS[slug])
      .filter((t): t is RegistryTool => !!t)
      .slice(0, limit);
  }

  // Fallback context mapping
  return Object.values(REGISTRY_TOOLS).slice(0, limit);
}

/**
 * Resolves related FAQs mapped contextually by category or explicitly linked.
 */
export function getRelatedFAQs(articleSlug: string, limit: number = 2): RegistryFAQ[] {
  const current = REGISTRY_ARTICLES.find(a => a.slug === articleSlug);
  if (!current) return [];

  const matchedFaqs = Object.values(REGISTRY_FAQS).filter(
    faq => faq.category === current.category || (faq.relatedArticles && faq.relatedArticles.includes(articleSlug))
  );

  return matchedFaqs.slice(0, limit);
}

/**
 * Returns parent category (Pillar) details.
 */
export function getParentPillar(articleSlug: string): RegistryCategory | null {
  const current = REGISTRY_ARTICLES.find(a => a.slug === articleSlug);
  if (!current) return null;
  return REGISTRY_CATEGORIES[current.category] || null;
}

/**
 * Returns all child spoke pages associated with a specific category.
 */
export function getChildSpokes(categorySlug: string): RegistryArticle[] {
  return REGISTRY_ARTICLES.filter(
    a => a.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
}
