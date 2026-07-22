'use strict';

console.log('=== CATALOG INTELLIGENCE TEST SUITE ===\n');

const { catalogAnalyzer, catalogHealth, catalogCoverage, catalogComparison } = require('../catalogIntelligence');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

const health = catalogHealth.assessHealth();
assert(typeof health.healthScore === 'number', 'CatalogHealth returns numeric score');
assert(health.healthScore >= 0 && health.healthScore <= 100, 'Health score in valid range');

const coverage = catalogCoverage.getCoverage();
assert(typeof coverage.coveragePercentage === 'number', 'CatalogCoverage returns percentage');

const comparison = catalogComparison.compareCatalogs('A', 'B');
assert(typeof comparison.matchingProducts === 'number', 'CatalogComparison returns matchingProducts');

const full = catalogAnalyzer.analyzeCatalog();
assert(full.health && full.coverage && full.metrics, 'CatalogAnalyzer returns complete analysis');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
