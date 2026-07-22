'use strict';

const catalogHealth = require('./catalogHealth');
const catalogCoverage = require('./catalogCoverage');
const catalogComparison = require('./catalogComparison');
const catalogMetrics = require('./catalogMetrics');

class CatalogAnalyzer {
  analyzeCatalog() {
    catalogMetrics.recordAudit();
    const health = catalogHealth.assessHealth();
    const coverage = catalogCoverage.getCoverage();

    return {
      health,
      coverage,
      metrics: catalogMetrics.getMetrics()
    };
  }
}

module.exports = new CatalogAnalyzer();
