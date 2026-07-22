'use strict';

console.log('=== COMPETITION MAP TEST SUITE ===\n');

const { competitionMap } = require('../market');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

// Test 1: Monopoly (HHI = 10000)
const monopoly = competitionMap.mapCompetition([{ name: 'Monopolist', marketShare: 100, rating: 5 }]);
assert(monopoly.herfindahlIndex === 10000, 'Monopoly HHI = 10000');
assert(monopoly.concentrationLevel === 'HIGH', 'Monopoly is HIGH concentration');

// Test 2: Perfect competition (many small players)
const perfect = [];
for (let i = 0; i < 100; i++) perfect.push({ name: `S${i}`, marketShare: 1, rating: 3 });
const perfRes = competitionMap.mapCompetition(perfect);
assert(perfRes.herfindahlIndex === 100, 'Perfect competition HHI = 100');
assert(perfRes.concentrationLevel === 'LOW', 'Perfect competition is LOW concentration');

// Test 3: Empty
const empty = competitionMap.mapCompetition([]);
assert(empty.totalCompetitors === 0, 'Empty returns 0 competitors');
assert(empty.topPlayer === null, 'Empty returns null topPlayer');

// Test 4: Duopoly
const duo = competitionMap.mapCompetition([{ name: 'A', marketShare: 50, rating: 4 }, { name: 'B', marketShare: 50, rating: 4 }]);
assert(duo.herfindahlIndex === 5000, 'Duopoly HHI = 5000');
assert(duo.concentrationLevel === 'HIGH', 'Duopoly is HIGH concentration');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
