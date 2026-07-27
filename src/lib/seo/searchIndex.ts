/**
 * Search Index Builder
 * Path: /src/lib/seo/searchIndex.ts
 * Description: Programmatically generates a compressed search-index.json containing semantic context for future AI and local site searches.
 */

import fs from 'fs';
import path from 'path';
import { REGISTRY_ARTICLES, REGISTRY_CATEGORIES, REGISTRY_TOOLS, REGISTRY_FAQS } from '@/content/registry';

export interface SearchIndexItem {
  title: string;
  summary: string;
  slug: string;
  path: string;
  type: 'article' | 'tool' | 'faq' | 'category';
  category: string;
  keywords?: string[];
}

/**
 * Builds the search-index.json registry file and writes it to the public directory.
 */
export function buildSearchIndex(): boolean {
  const items: SearchIndexItem[] = [];

  // 1. Add Categories
  for (const category of Object.values(REGISTRY_CATEGORIES)) {
    items.push({
      title: `${category.name} Category`,
      summary: category.description,
      slug: category.slug,
      path: `/knowledge/${category.slug}`,
      type: 'category',
      category: category.slug,
      keywords: [category.name, 'procurement guide', 'gem instruction']
    });
  }

  // 2. Add Tools
  for (const tool of Object.values(REGISTRY_TOOLS)) {
    items.push({
      title: tool.name,
      summary: `${tool.headline}. ${tool.description}`,
      slug: tool.slug,
      path: `/tools/${tool.slug}`,
      type: 'tool',
      category: 'tools',
      keywords: [...tool.useCases, tool.name]
    });
  }

  // 3. Add FAQs
  for (const faq of Object.values(REGISTRY_FAQS)) {
    items.push({
      title: faq.question,
      summary: faq.answer,
      slug: faq.slug,
      path: `/faq/${faq.slug}`,
      type: 'faq',
      category: faq.category,
      keywords: [faq.question, 'faq', 'procurement question']
    });
  }

  // 4. Add Articles
  for (const article of REGISTRY_ARTICLES) {
    items.push({
      title: article.title,
      summary: article.summary,
      slug: article.slug,
      path: `/knowledge/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`,
      type: 'article',
      category: article.category,
      keywords: article.keyTakeaways || [article.title]
    });
  }

  try {
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const outputPath = path.join(publicDir, 'search-index.json');
    fs.writeFileSync(outputPath, JSON.stringify(items, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Failed to write search index:', error);
    return false;
  }
}
