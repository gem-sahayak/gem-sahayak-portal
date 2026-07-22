'use strict';

console.log('=== SUPPLIER INTELLIGENCE TEST SUITE ===\n');

const { supplierProfile, supplierHistory, supplierCapability, supplierRisk } = require('../supplier');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

// Test 1: Supplier Profile
const prof = supplierProfile.buildProfile({ name: 'Test Corp', gstin: '07AAACG1234A1Z5', category: 'IT', turnover: 5000000, yearsActive: 5, certifications: ['ISO'] });
assert(prof.profileCompleteness === 75, 'Profile completeness 75% (6 of 8 fields)');
assert(prof.tier === 'SILVER', 'Tier is SILVER for 75%');
assert(prof.missingFields.length === 2, '2 missing fields (state, city)');

// Test 2: Supplier History
supplierHistory.clear();
supplierHistory.recordEvent({ type: 'BID_SUBMITTED', bidId: 'B001' });
supplierHistory.recordEvent({ type: 'ORDER_COMPLETED', orderId: 'O001' });
assert(supplierHistory.getHistory().length === 2, 'History records 2 events');
assert(supplierHistory.getEventsByType('BID_SUBMITTED').length === 1, 'Filters by type correctly');

// Test 3: Supplier Capability
const cap = supplierCapability.assessCapability({ categories: ['IT', 'Electronics'], deliveryStates: ['UP', 'DL', 'MH', 'KA', 'TN'], maxOrderValue: 5000000, certifications: ['ISO', 'MSME', 'OEM'] });
assert(cap.capabilityScore > 0 && cap.capabilityScore <= 100, 'Capability score in 0-100');
assert(cap.certificationLevel === 'PREMIUM', 'Certification level PREMIUM for 3 certs');
assert(cap.geographicReach === 5, 'Geographic reach = 5 states');

// Test 4: Supplier Risk — Low risk scenario
const lowRisk = supplierRisk.assessRisk({ completedOrders: 100, cancelledOrders: 1, lateDeliveries: 2, complaints: 1, yearsActive: 8 });
assert(lowRisk.riskLevel === 'LOW', 'Low risk for excellent performance');
assert(lowRisk.riskScore < 20, 'Risk score below 20 for low risk');

// Test 5: Supplier Risk — High risk scenario
const highRisk = supplierRisk.assessRisk({ completedOrders: 50, cancelledOrders: 15, lateDeliveries: 20, complaints: 10, yearsActive: 0 });
assert(highRisk.riskLevel === 'CRITICAL' || highRisk.riskLevel === 'HIGH', 'High/Critical risk for poor performance');
assert(highRisk.factors.length >= 1, 'Risk factors identified');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
