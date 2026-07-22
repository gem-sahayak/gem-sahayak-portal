'use strict';

console.log('=== MARKET INTELLIGENCE TEST SUITE ===\n');

const { marketTrends, categoryInsights, competitionMap, procurementCalendar } = require('../market');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

// Test 1: Market Trends — Rising
const rising = marketTrends.analyzeTrends([{ period: 'Q1', value: 100 }, { period: 'Q2', value: 120 }, { period: 'Q3', value: 140 }, { period: 'Q4', value: 160 }]);
assert(rising.trend === 'RISING', 'Detects RISING trend for increasing values');
assert(rising.averageGrowthRate === 60, 'Growth rate 60% from 100 to 160');
assert(rising.dataPointCount === 4, 'Data point count is 4');

// Test 2: Market Trends — Stable
const stable = marketTrends.analyzeTrends([{ period: 'Q1', value: 100 }, { period: 'Q2', value: 101 }, { period: 'Q3', value: 100 }, { period: 'Q4', value: 101 }]);
assert(stable.trend === 'STABLE', 'Detects STABLE trend for flat values');

// Test 3: Category Insights
const catIns = categoryInsights.analyzeCategory({ categoryName: 'IT_HARDWARE', totalBids: 75, avgBidValue: 200000, topSuppliers: 25, demandIndex: 0.85 });
assert(catIns.competitionLevel === 'HIGH', 'HIGH competition for 75 bids');
assert(catIns.marketSize === 15000000, 'Market size = 75 * 200000');
assert(catIns.supplierConcentration === 'FRAGMENTED', 'FRAGMENTED for 25 suppliers');

// Test 4: Competition Map — HHI
const comp = competitionMap.mapCompetition([
  { name: 'A', marketShare: 40, rating: 4.5 },
  { name: 'B', marketShare: 30, rating: 4.2 },
  { name: 'C', marketShare: 20, rating: 3.8 },
  { name: 'D', marketShare: 10, rating: 3.5 }
]);
assert(comp.herfindahlIndex === 3000, 'HHI = 40² + 30² + 20² + 10² = 3000');
assert(comp.concentrationLevel === 'HIGH', 'HIGH concentration for HHI > 2500');
assert(comp.topPlayer.name === 'A', 'Top player is A with 40% share');

// Test 5: Procurement Calendar
procurementCalendar.clear();
const futureDate = new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0];
procurementCalendar.addEvent({ title: 'Bid Opening', date: futureDate, type: 'BID', priority: 'HIGH' });
assert(procurementCalendar.getEvents().length === 1, 'Calendar stores 1 event');
assert(procurementCalendar.getUpcoming(30).length === 1, 'Upcoming shows future event');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
