/**
 * JSON-LD Schema Generator
 * Path: /src/lib/seo/jsonLd.ts
 * Description: Programmatic builders for generating standardized Schema.org JSON-LD blocks.
 */

export const BASE_URL = 'https://sahayakai.com';

export const ORGANISATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "SahayakAI",
  "url": BASE_URL,
  "logo": `${BASE_URL}/assets/logo_sahayak_ai.png`,
  "sameAs": [
    "https://twitter.com/sahayakai",
    "https://linkedin.com/company/sahayakai"
  ]
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "SahayakAI",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

export function buildArticleSchema(article: {
  title: string;
  summary: string;
  date: string;
  updatedDate?: string;
  author: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${BASE_URL}/knowledge/${article.category}/${article.slug}#article`,
    "headline": article.title,
    "description": article.summary,
    "datePublished": article.date,
    "dateModified": article.updatedDate || article.date,
    "url": `${BASE_URL}/knowledge/${article.category}/${article.slug}`,
    "author": {
      "@type": "Person",
      "name": article.author,
      "worksFor": { "@id": `${BASE_URL}/#organization` }
    },
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "isPartOf": { "@id": `${BASE_URL}/#website` }
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function buildWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}${page.url}#webpage`,
    "url": `${BASE_URL}${page.url}`,
    "name": page.title,
    "description": page.description,
    "isPartOf": { "@id": `${BASE_URL}/#website` }
  };
}

export function buildSoftwareApplicationSchema(tool: {
  slug: string;
  name: string;
  headline: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/tools/${tool.slug}#software`,
    "name": tool.name,
    "headline": tool.headline,
    "description": tool.description,
    "applicationCategory": tool.applicationCategory || "BusinessApplication",
    "operatingSystem": tool.operatingSystem || "Windows, macOS, Linux",
    "url": `${BASE_URL}/tools/${tool.slug}`,
    "publisher": { "@id": `${BASE_URL}/#organization` }
  };
}

export function buildHowToSchema(howto: {
  name: string;
  description: string;
  steps: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howto.name,
    "description": howto.description,
    "step": howto.steps.map((stepText, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "text": stepText
    }))
  };
}

export function buildItemListSchema(items: { name: string; url: string; position: number }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "url": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
      "name": item.name
    }))
  };
}

export function buildCollectionPageSchema(category: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}${category.url}#collection`,
    "url": `${BASE_URL}${category.url}`,
    "name": category.name,
    "description": category.description,
    "isPartOf": { "@id": `${BASE_URL}/#website` }
  };
}
