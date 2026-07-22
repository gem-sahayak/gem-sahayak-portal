'use strict';

/**
 * SupplierCapability — Assesses supplier operational capability.
 * Scores based on categories, geographic reach, order capacity, and certifications.
 */
class SupplierCapability {
  assessCapability(supplierData = {}) {
    const { categories = [], deliveryStates = [], maxOrderValue = 0, certifications = [] } = supplierData;

    const categoryDepth = Math.min(categories.length * 10, 25);
    const geographicReach = Math.min(deliveryStates.length * 3, 25);
    const orderCapacity = maxOrderValue >= 10000000 ? 25 : Math.round((maxOrderValue / 10000000) * 25);
    const certScore = Math.min(certifications.length * 5, 25);

    const capabilityScore = Math.min(categoryDepth + geographicReach + orderCapacity + certScore, 100);

    let certificationLevel;
    if (certifications.length >= 5) certificationLevel = 'ENTERPRISE';
    else if (certifications.length >= 3) certificationLevel = 'PREMIUM';
    else if (certifications.length >= 1) certificationLevel = 'STANDARD';
    else certificationLevel = 'BASIC';

    return {
      capabilityScore,
      geographicReach: deliveryStates.length,
      categoryDepth: categories.length,
      certificationLevel,
      breakdown: { categoryDepth, geographicReach, orderCapacity, certScore }
    };
  }
}

module.exports = new SupplierCapability();
