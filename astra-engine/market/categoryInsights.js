'use strict';

/**
 * CategoryInsights — Analyzes procurement category intelligence.
 * Evaluates competition level, market size, and supplier concentration.
 */
class CategoryInsights {
  analyzeCategory(categoryData = {}) {
    const { categoryName = 'Unknown', totalBids = 0, avgBidValue = 0, topSuppliers = 0, demandIndex = 0 } = categoryData;

    let competitionLevel;
    if (totalBids >= 50 || topSuppliers >= 20) competitionLevel = 'HIGH';
    else if (totalBids >= 15 || topSuppliers >= 5) competitionLevel = 'MEDIUM';
    else competitionLevel = 'LOW';

    const marketSize = Math.round(totalBids * avgBidValue);

    let supplierConcentration;
    if (topSuppliers <= 3) supplierConcentration = 'OLIGOPOLY';
    else if (topSuppliers <= 10) supplierConcentration = 'MODERATE';
    else supplierConcentration = 'FRAGMENTED';

    return {
      categoryName,
      competitionLevel,
      marketSize,
      supplierConcentration,
      demandIndex,
      totalBids,
      avgBidValue
    };
  }
}

module.exports = new CategoryInsights();
