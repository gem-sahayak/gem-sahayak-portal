'use strict';

const topologyCharts = require('./charts/topologyCharts');

/**
 * Semantic Dashboard.
 * Visualizes topic clusters, topical authority, keyword cannibalization alerts.
 */
class SemanticDashboard {
  renderSemantic(state = {}) {
    return {
      overallSemanticScore: 71,
      activeClusters: 5,
      topologyChart: topologyCharts.renderClusterTopology(),
      cannibalizationAlertsCount: 3,
      topicalAuthorityPercent: 94
    };
  }
}

module.exports = new SemanticDashboard();
