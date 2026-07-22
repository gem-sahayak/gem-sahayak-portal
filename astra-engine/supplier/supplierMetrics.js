'use strict';

/**
 * SupplierMetrics — Tracks supplier analysis session metrics.
 */
class SupplierMetrics {
  constructor() {
    this.totalSuppliersAnalyzed = 0;
    this.totalRiskAssessments = 0;
    this.totalCapabilityAssessments = 0;
  }

  recordAnalysis() { this.totalSuppliersAnalyzed++; }
  recordRiskAssessment() { this.totalRiskAssessments++; }
  recordCapabilityAssessment() { this.totalCapabilityAssessments++; }

  getMetrics() {
    return {
      totalSuppliersAnalyzed: this.totalSuppliersAnalyzed,
      totalRiskAssessments: this.totalRiskAssessments,
      totalCapabilityAssessments: this.totalCapabilityAssessments
    };
  }
}

module.exports = new SupplierMetrics();
