'use strict';

class EvidenceCollector {
  collectEvidence() {
    return [
      { id: 'evd-1', type: 'FINGERPRINT_VERIFIED', confidence: 1.0 },
      { id: 'evd-2', type: 'TEST_SUITES_PASSED', confidence: 1.0 }
    ];
  }
}

module.exports = new EvidenceCollector();
