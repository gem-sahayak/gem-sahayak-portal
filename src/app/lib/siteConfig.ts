// ============================================================
// SITE_CONFIG — Single Source of Truth for all site-wide data
// NEVER hardcode these values elsewhere — always import from here
// ============================================================

export const SITE_CONFIG = {
  name: "SahayakAI",
  url: "https://sahayakai.co.in",
  chromeStoreUrl: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
  whatsappUrl: "https://wa.me/919183712004?text=Hi%20SahayakAI%20Team%2C%20I%20need%20help%20with%20the%20extension.",

  // ── Official Metrics (update only here) ──────────────────
  stats: {
    knowledgeGuides: "116+",
    faqs: "200+",
    aiTools: "5+",
    businessesSupported: "10,00+",
    dailyAlerts: "500+",
    procurementEntities: "1,000+",
    procurementCategories: "Many",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
