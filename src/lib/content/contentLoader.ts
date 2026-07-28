/**
 * Content Loader
 * Path: /src/lib/content/contentLoader.ts
 * Description: Data access layer to retrieve registered articles, categories, FAQs, and tools from the file system and registry.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
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

const primaryPostsDir = path.join(process.cwd(), 'seo-engine', 'posts');
const fallbackPostsDir = path.join(process.cwd(), 'posts');
const postsDirectory = fs.existsSync(primaryPostsDir) ? primaryPostsDir : fallbackPostsDir;

export interface FullArticle extends RegistryArticle {
  contentHtml: string;
  headings: { text: string; id: string; level: number }[];
}

/**
 * Loads a single article by slug, parses its markdown file, and merges it with registry configurations.
 */
export async function loadArticle(slug: string): Promise<FullArticle | null> {
  // Verify it exists in registry first (governance gate)
  const registryEntry = REGISTRY_ARTICLES.find(article => article.slug === slug);
  if (!registryEntry) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    // If registered but markdown file is missing, fail safely
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Extract headings statically
    const headings: { text: string; id: string; level: number }[] = [];
    const lines = matterResult.content.split('\n');
    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*+/g, '').trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        headings.push({ text, id, level });
      }
    });

    const customRenderer = new marked.Renderer();
    customRenderer.heading = ({ text, depth }: { text: string; depth: number }) => {
      const cleanText = text.replace(/<[^>]*>/g, '');
      const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      return `<h${depth} id="${id}">${text}</h${depth}>`;
    };

    const contentHtmlRaw = await marked.parse(matterResult.content, { renderer: customRenderer });

    // Apply Compile-Time Markdown HTML transformations (Procurement OS v5.0 Spec)
    let processedHtml = contentHtmlRaw;
    
    // Emojis blockquote transforms to visual blocks
    processedHtml = processedHtml.replace(/<blockquote>\s*<p>\s*⚠️\s*/gi, '<div class="info-block critical"><div class="info-block-icon">⚠️</div><div class="info-block-content"><p>');
    processedHtml = processedHtml.replace(/<blockquote>\s*<p>\s*💡\s*/gi, '<div class="info-block success"><div class="info-block-icon">💡</div><div class="info-block-content"><p>');
    processedHtml = processedHtml.replace(/<blockquote>\s*<p>\s*✅\s*/gi, '<div class="info-block success"><div class="info-block-icon">✅</div><div class="info-block-content"><p>');
    processedHtml = processedHtml.replace(/<blockquote>\s*<p>\s*📌\s*/gi, '<div class="info-block info"><div class="info-block-icon">📌</div><div class="info-block-content"><p>');
    processedHtml = processedHtml.replace(/<blockquote>\s*<p>\s*📖\s*/gi, '<div class="info-block rule"><div class="info-block-icon">📖</div><div class="info-block-content"><p>');
    processedHtml = processedHtml.replace(/<blockquote>\s*<p>\s*🚀\s*/gi, '<div class="info-block ai"><div class="info-block-icon">🚀</div><div class="info-block-content"><p>');
    
    // Close blockquote transforms
    processedHtml = processedHtml.replace(/<\/p>\s*<\/blockquote>/gi, '</p></div></div>');

    // Process lists containing "Step" keyword to vertical timelines
    processedHtml = processedHtml.replace(/<ol>([\s\S]*?<\/ol>)/gi, (match) => {
      if (match.toLowerCase().includes("step")) {
        let stepCount = 1;
        return match
          .replace(/<ol>/i, '<ol class="timeline-list">')
          .replace(/<li>/gi, () => {
            const marker = `<li class="timeline-item"><div class="timeline-marker">${stepCount}</div>`;
            stepCount++;
            return marker;
          });
      }
      return match;
    });

    // Checkbox lists styling
    processedHtml = processedHtml.replace(/<li>\s*\[x\]\s*/gi, '<li class="checklist-item"><strong>[COMPLETED]</strong> ');
    processedHtml = processedHtml.replace(/<li>\s*\[\s*\]\s*/gi, '<li class="checklist-item">');

    return {
      ...registryEntry,
      contentHtml: processedHtml,
      headings,
      title: matterResult.data.title || registryEntry.title,
      summary: matterResult.data.summary || registryEntry.summary,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

/**
 * Loads a category by its slug, including all articles registered under it.
 */
export function loadCategory(slug: string): (RegistryCategory & { articles: RegistryArticle[] }) | null {
  const category = REGISTRY_CATEGORIES[slug];
  if (!category) return null;

  const articles = REGISTRY_ARTICLES.filter(
    article => article.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  return {
    ...category,
    articles
  };
}

/**
 * Loads a single FAQ by its slug.
 */
export function loadFAQ(slug: string): RegistryFAQ | null {
  const faq = REGISTRY_FAQS[slug];
  if (faq) return faq;

  // Fallback: search within articles for nested FAQs
  for (const article of REGISTRY_ARTICLES) {
    if (article.faqs) {
      const match = article.faqs.find(
        f => f.q.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
      );
      if (match) {
        return {
          slug,
          question: match.q,
          answer: match.a,
          category: article.category,
          relatedArticles: [article.slug]
        };
      }
    }
  }

  return null;
}

/**
 * Loads a single tool configuration by slug.
 */
export function loadTool(slug: string): RegistryTool | null {
  return REGISTRY_TOOLS[slug] || null;
}

/**
 * Loads all knowledge hub categories and recent articles.
 */
export function loadKnowledge() {
  return {
    categories: Object.values(REGISTRY_CATEGORIES),
    articles: REGISTRY_ARTICLES
  };
}
