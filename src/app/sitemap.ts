import { MetadataRoute } from 'next';
import { REGISTRY_ARTICLES, REGISTRY_CATEGORIES, REGISTRY_TOOLS, REGISTRY_FAQS } from '@/content/registry';
import { buildSearchIndex } from '@/lib/seo/searchIndex';
import { validateRegistry } from '@/lib/seo/validation';

export default function sitemap(): MetadataRoute.Sitemap {
  // Trigger programmatic builders during static generation
  buildSearchIndex();
  
  // Run validation and print issues to build logs
  const report = validateRegistry();
  if (!report.isValid) {
    console.warn(`[SEO Warning] Found ${report.issues.length} issues in registry.`);
  }

  const baseUrl = 'https://sahayakai.co.in';

  // Base pages and tools
  const staticRoutes = [
    '',
    '/about',
    '/pricing',
    '/contact',
    '/knowledge',
    '/disclaimer',
    '/privacy',
    '/terms',
    '/tools',
  ];

  // Map static pages
  const routes = staticRoutes.map((route) => {
    let priority = 0.5;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/tools' || route === '/knowledge') {
      priority = 0.9;
      changeFrequency = 'daily';
    } else if (['/disclaimer', '/privacy', '/terms'].includes(route)) {
      priority = 0.3;
      changeFrequency = 'monthly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // Map category hub routes (/knowledge/[category] and /categories/[category])
  const categoryRoutes = Object.values(REGISTRY_CATEGORIES).flatMap((cat) => {
    return [
      {
        url: `${baseUrl}/knowledge/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/categories/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }
    ];
  });

  // Map tool routes (/tools/[slug])
  const toolRoutes = Object.values(REGISTRY_TOOLS).map((tool) => {
    return {
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  // Map FAQ routes (/faq/[slug])
  const faqRoutes = Object.values(REGISTRY_FAQS).map((faq) => {
    return {
      url: `${baseUrl}/faq/${faq.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    };
  });

  // Map dynamic article routes (/knowledge/[category]/[slug])
  const articleRoutes = REGISTRY_ARTICLES.map((post) => {
    const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
    return {
      url: `${baseUrl}/knowledge/${categorySlug}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  return [...routes, ...categoryRoutes, ...toolRoutes, ...faqRoutes, ...articleRoutes];
}
