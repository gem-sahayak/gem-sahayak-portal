'use strict';

const qualificationMatrix = require('./qualificationMatrix');
const documentMatrix = require('./documentMatrix');
const riskCompliance = require('./riskCompliance');
const complianceMetrics = require('./complianceMetrics');
const complianceHistory = require('./complianceHistory');

class EligibilityEngine {
  evaluateEligibility(sellerData = {}) {
    complianceMetrics.recordCheck();
    const qualification = qualificationMatrix.buildMatrix();
    const documents = documentMatrix.mapDocuments();
    const risk = riskCompliance.assessRisk();

    const result = {
      eligible: true,
      exemptionStatus: 'MSME_EMD_EXEMPTED',
      qualification,
      documents,
      risk
    };

    complianceHistory.record(result);

    return result;
  }
}

module.exports = new EligibilityEngine();
