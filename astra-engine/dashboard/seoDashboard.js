'use strict';

const entityCharts = require('./charts/entityCharts');

/**
 * SEO Dashboard.
 * Visualizes keywords, coverage, cannibalization, authority, clusters, entity density, internal links.
 */
class SeoDashboard {
  renderSeo(state = {}) {
    return {
      topKeywords: ['GeM portal helper', 'Udyam error solve', 'EMD refund rules', 'L1 margin calculator'],
      categoryClustersCount: 5,
      entityDensityChart: entityCharts.renderEntityDensity(),
      internalLinksTotal: 103,
      missingTopicsCount: 12
    };
  }
}

module.exports = new SeoDashboard();
