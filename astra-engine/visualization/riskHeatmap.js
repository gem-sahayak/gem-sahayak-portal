'use strict';

class RiskHeatmapVisualizer {
  renderHeatmap() {
    return { type: 'RISK_HEATMAP', overallRisk: 'LOW', cells: [{ name: 'Execution', risk: 'LOW' }] };
  }
}

module.exports = new RiskHeatmapVisualizer();
