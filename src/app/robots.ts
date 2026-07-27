import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/settings', '/notifications', '/review-panel', '/actions'],
      },
      {
        // Allow AI search bots that SEND traffic (SearchGPT, Perplexity, Claude Search)
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-SearchBot'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/settings'],
      },
      {
        // Allow Google's AI crawler — CRITICAL for AI Overviews ranking
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Block AI training scrapers (these scrape data, don't send traffic)
        userAgent: ['GPTBot', 'ClaudeBot', 'CCBot', 'anthropic-ai', 'Bytespider'],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://sahayakai.com/sitemap.xml',
  };
}
