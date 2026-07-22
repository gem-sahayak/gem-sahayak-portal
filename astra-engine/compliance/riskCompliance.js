'use strict';

class RiskCompliance {
  assessRisk() {
    return { complianceRiskScore: 5, classification: 'LOW_RISK', blacklistingRisk: 'NONE' };
  }
}

module.exports = new RiskCompliance();
