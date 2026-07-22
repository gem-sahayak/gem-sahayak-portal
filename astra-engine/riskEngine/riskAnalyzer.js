'use strict';

const failurePrediction = require('./failurePrediction');
const conflictDetector = require('./conflictDetector');
const dependencyRisk = require('./dependencyRisk');
const performanceRisk = require('./performanceRisk');
const resourceRisk = require('./resourceRisk');
const rollbackRisk = require('./rollbackRisk');
const impactAnalysis = require('./impactAnalysis');
const riskScore = require('./riskScore');
const riskMetrics = require('./riskMetrics');

class RiskAnalyzer {
  runAnalysis() {
    riskMetrics.recordAssessment();
    const failures = failurePrediction.predictFailures();
    const conflicts = conflictDetector.detectConflicts();
    const depRisk = dependencyRisk.assess();
    const perfRisk = performanceRisk.assess();
    const resRisk = resourceRisk.assess();
    const rollRisk = rollbackRisk.assess();
    const impact = impactAnalysis.analyze();

    const overallScore = riskScore.calculateScore(failures);

    return {
      overallRiskScore: overallScore,
      classification: overallScore > 50 ? 'HIGH' : (overallScore > 20 ? 'MEDIUM' : 'LOW'),
      failures,
      conflicts,
      dependencyRisk: depRisk,
      performanceRisk: perfRisk,
      resourceRisk: resRisk,
      rollbackRisk: rollRisk,
      impactAnalysis: impact
    };
  }
}

module.exports = new RiskAnalyzer();
