'use strict';

console.log('=== PRICING INTELLIGENCE TEST SUITE ===\n');

const { priceVariance, competitivePosition, pricingBenchmark, pricingAnalyzer } = require('../pricing');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

// Test 1: Price Variance
const v = priceVariance.calculateVariance(1500, 1800);
assert(v.variancePercent === -17, 'PriceVariance computes -17% for 1500 vs 1800');
assert(v.status === 'COMPETITIVE', 'PriceVariance status COMPETITIVE when below benchmark');

// Test 2: Competitive Position
const pos = competitivePosition.analyzePosition({ unitPrice: 1500, marketAvg: 1800, marketMin: 1200, marketMax: 2400 });
assert(pos.position === 'BELOW_AVERAGE', 'Position BELOW_AVERAGE for 1500 vs 1800 avg');
assert(pos.percentile === 25, 'Percentile is 25 for 1500 in range 1200-2400');
assert(pos.recommendation === 'COMPETITIVE_ADVANTAGE', 'Recommendation is COMPETITIVE_ADVANTAGE');

// Test 3: Pricing Benchmark
const bm = pricingBenchmark.benchmark(1500, [1600, 1700, 1650, 1800, 1750]);
assert(typeof bm.mean === 'number' && bm.mean > 0, 'Benchmark computes mean');
assert(typeof bm.median === 'number' && bm.median > 0, 'Benchmark computes median');
assert(typeof bm.stdDev === 'number', 'Benchmark computes stdDev');
assert(typeof bm.zScore === 'number', 'Benchmark computes zScore');
assert(['RISING', 'STABLE', 'DECLINING'].includes(bm.trend), 'Benchmark returns valid trend');

// Test 4: Full Analyzer
const full = pricingAnalyzer.analyze({ unitPrice: 2000, benchmarkPrice: 1800, marketAvg: 1800, marketMin: 1200, marketMax: 2400, historicalPrices: [1700, 1750, 1800] });
assert(full.variance && full.position && full.benchmark, 'PricingAnalyzer returns all sub-results');
assert(full.position.position === 'ABOVE_AVERAGE', 'Position ABOVE_AVERAGE for 2000 vs 1800');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
