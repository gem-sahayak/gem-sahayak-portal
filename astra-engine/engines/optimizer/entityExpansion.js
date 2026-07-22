'use strict';

/**
 * Entity Expansion Engine.
 * Identifies missing, related, competitor, and government entities.
 */
class EntityExpansionEngine {
  generateEntityExpansions(article) {
    const text = `${article.title || ''} ${article.summary || ''}`.toLowerCase();
    const missingEntities = [];

    if (!text.includes('nsic')) missingEntities.push({ name: 'NSIC Registration', category: 'Government Organization', priority: 'HIGH' });
    if (!text.includes('epbg')) missingEntities.push({ name: 'ePBG Bank Guarantee', category: 'Financial Instrument', priority: 'MEDIUM' });
    if (!text.includes('gfr')) missingEntities.push({ name: 'GFR Rule 170', category: 'Legal Regulation', priority: 'HIGH' });

    return {
      articleSlug: article.slug,
      missingEntities,
      recommendation: missingEntities.length > 0 ? `Include references to ${missingEntities.map(e => e.name).join(', ')}` : 'Entity density is adequate'
    };
  }
}

module.exports = new EntityExpansionEngine();
