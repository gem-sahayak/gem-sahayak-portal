'use strict';

/**
 * SupplierRisk — Evaluates supplier risk from operational data.
 * Computes risk score deterministically from delivery performance and complaint data.
 */
class SupplierRisk {
  assessRisk(supplierData = {}) {
    const { completedOrders = 0, cancelledOrders = 0, lateDeliveries = 0, complaints = 0, yearsActive = 0 } = supplierData;

    const totalOrders = completedOrders + cancelledOrders;
    const factors = [];

    let riskScore = 0;

    // Cancellation rate factor (0-30 points)
    const cancellationRate = totalOrders > 0 ? (cancelledOrders / totalOrders) * 100 : 0;
    if (cancellationRate > 10) { riskScore += 30; factors.push('HIGH_CANCELLATION_RATE'); }
    else if (cancellationRate > 5) { riskScore += 15; factors.push('MODERATE_CANCELLATION_RATE'); }
    else riskScore += Math.round(cancellationRate * 3);

    // Late delivery factor (0-30 points)
    const lateRate = totalOrders > 0 ? (lateDeliveries / totalOrders) * 100 : 0;
    if (lateRate > 15) { riskScore += 30; factors.push('HIGH_LATE_DELIVERY_RATE'); }
    else if (lateRate > 5) { riskScore += 15; factors.push('MODERATE_LATE_DELIVERY_RATE'); }
    else riskScore += Math.round(lateRate * 2);

    // Complaint factor (0-20 points)
    const complaintRate = totalOrders > 0 ? (complaints / totalOrders) * 100 : 0;
    if (complaintRate > 10) { riskScore += 20; factors.push('HIGH_COMPLAINT_RATE'); }
    else if (complaintRate > 3) { riskScore += 10; factors.push('MODERATE_COMPLAINT_RATE'); }
    else riskScore += Math.round(complaintRate * 2);

    // Experience factor (0-20 points — lower experience = higher risk)
    if (yearsActive < 1) { riskScore += 20; factors.push('NEW_SUPPLIER'); }
    else if (yearsActive < 3) { riskScore += 10; factors.push('LIMITED_TRACK_RECORD'); }

    riskScore = Math.min(riskScore, 100);

    let riskLevel;
    if (riskScore >= 70) riskLevel = 'CRITICAL';
    else if (riskScore >= 45) riskLevel = 'HIGH';
    else if (riskScore >= 20) riskLevel = 'MEDIUM';
    else riskLevel = 'LOW';

    return { riskScore, riskLevel, factors, rates: { cancellationRate: Math.round(cancellationRate * 100) / 100, lateRate: Math.round(lateRate * 100) / 100, complaintRate: Math.round(complaintRate * 100) / 100 } };
  }
}

module.exports = new SupplierRisk();
