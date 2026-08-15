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
        // Allow AI crawlers that power search products (Perplexity uses CCBot, ChatGPT uses GPTBot)
        userAgent: ['GPTBot', 'ClaudeBot', 'CCBot', 'anthropic-ai'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/settings', '/workspace'],
      },
      {
        // Block pure training scrapers (no search product, no traffic back)
        userAgent: ['Bytespider'],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://sahayakai.co.in/sitemap.xml',
  };
}
