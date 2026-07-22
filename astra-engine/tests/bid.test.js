'use strict';

console.log('=== BID INTELLIGENCE TEST SUITE ===\n');

const { bidAnalyzer, bidClassifier, bidComplexity, bidTimeline, bidDependencies } = require('../bidIntelligence');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

// Test 1: Classifier
const cls = bidClassifier.classifyBid({});
assert(typeof cls.type === 'string', 'BidClassifier returns type');
assert(typeof cls.category === 'string', 'BidClassifier returns category');

// Test 2: Complexity
const cplx = bidComplexity.scoreComplexity({});
assert(typeof cplx.score === 'number', 'BidComplexity returns numeric score');
assert(['LOW', 'MEDIUM', 'HIGH'].includes(cplx.level), 'BidComplexity returns valid level');

// Test 3: Timeline
const tl = bidTimeline.buildTimeline();
assert(typeof tl.publishedAt === 'string', 'BidTimeline returns publishedAt');
assert(typeof tl.submissionDeadline === 'string', 'BidTimeline returns submissionDeadline');

// Test 4: Dependencies
const deps = bidDependencies.analyzeDependencies();
assert(Array.isArray(deps.requiredCertificates), 'BidDependencies returns array');
assert(deps.requiredCertificates.length >= 1, 'At least 1 required certificate');

// Test 5: Full Analyzer
const full = bidAnalyzer.analyzeBid({ bidId: 'TEST-001' });
assert(full.classification && full.complexity && full.timeline && full.dependencies, 'BidAnalyzer returns all sub-results');
assert(full.metrics.totalBidsAnalyzed >= 1, 'Bid metrics incremented');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
