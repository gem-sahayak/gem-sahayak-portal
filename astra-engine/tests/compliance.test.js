'use strict';

console.log('=== COMPLIANCE ENGINE TEST SUITE ===\n');

const { eligibilityEngine, qualificationMatrix, documentMatrix, riskCompliance, complianceHistory } = require('../compliance');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) { passed++; console.log(`  ✅ ${label}`); }
  else { failed++; console.log(`  ❌ ${label}`); }
}

const qual = qualificationMatrix.buildMatrix();
assert(typeof qual.turnoverRequired === 'string', 'QualificationMatrix returns turnover');
assert(Array.isArray(qual.certifications), 'QualificationMatrix returns certifications array');

const docs = documentMatrix.mapDocuments();
assert(Array.isArray(docs), 'DocumentMatrix returns array');
assert(docs.length >= 1, 'At least 1 document mapped');
assert(docs[0].status === 'VERIFIED', 'Document status is VERIFIED');

const risk = riskCompliance.assessRisk();
assert(typeof risk.complianceRiskScore === 'number', 'RiskCompliance returns numeric score');
assert(['LOW_RISK', 'MEDIUM_RISK', 'HIGH_RISK'].includes(risk.classification), 'RiskCompliance returns valid classification');

const elig = eligibilityEngine.evaluateEligibility({ supplierId: 'TEST' });
assert(typeof elig.eligible === 'boolean', 'EligibilityEngine returns boolean eligible');
assert(elig.qualification && elig.documents && elig.risk, 'EligibilityEngine returns complete result');

const history = complianceHistory.getHistory();
assert(Array.isArray(history), 'ComplianceHistory returns array');
assert(history.length >= 1, 'History recorded at least 1 entry');

console.log(`\n  Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
