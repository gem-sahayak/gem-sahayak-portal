'use strict';

/**
 * Entity Charts Component.
 */
class EntityCharts {
  renderEntityDensity(entities = []) {
    return {
      chartType: 'BAR',
      categories: ['Udyam Aadhaar', 'EMD Refund', 'GFR Rule 170', 'L1 Comparison', 'NSIC Registration'],
      series: [{ name: 'Coverage Density', data: [95, 88, 72, 90, 60] }]
    };
  }
}

module.exports = new EntityCharts();
