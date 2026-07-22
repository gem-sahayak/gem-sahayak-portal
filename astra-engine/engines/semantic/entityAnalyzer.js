'use strict';

/**
 * Entity Extraction & Density Analyzer.
 * Identifies primary/secondary entities and evaluates coverage.
 */
class EntityAnalyzer {
  analyzeEntities(articles = []) {
    const entityMap = new Map();

    const knownEntities = [
      { name: 'GeM Portal', category: 'Platform', importance: 1.0 },
      { name: 'Udyam Certificate', category: 'Compliance', importance: 0.9 },
      { name: 'EMD Deposit', category: 'Finance', importance: 0.95 },
      { name: 'L1 Bidder', category: 'Bidding', importance: 0.9 },
      { name: 'GFR Guidelines 2017', category: 'Regulation', importance: 0.85 },
      { name: 'MSME Preference', category: 'Policy', importance: 0.8 },
      { name: 'Bank Guarantee / ePBG', category: 'Finance', importance: 0.8 },
      { name: 'Direct Purchase Limit', category: 'Compliance', importance: 0.85 }
    ];

    const covered = [];
    const weak = [];
    const missing = [];

    for (const ent of knownEntities) {
      let count = 0;
      for (const a of articles) {
        const text = `${a.title || ''} ${a.summary || ''}`.toLowerCase();
        if (text.includes(ent.name.toLowerCase())) {
          count++;
        }
      }

      const item = {
        name: ent.name,
        category: ent.category,
        importance: ent.importance,
        coveredInCount: count,
        status: count >= 5 ? 'COVERED' : (count >= 1 ? 'WEAK' : 'MISSING')
      };

      if (item.status === 'COVERED') covered.push(item);
      else if (item.status === 'WEAK') weak.push(item);
      else missing.push(item);
    }

    return {
      totalEntitiesDetected: knownEntities.length,
      covered,
      weak,
      missing
    };
  }
}

module.exports = new EntityAnalyzer();
