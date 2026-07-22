'use strict';

/**
 * SupplierProfile — Builds and evaluates supplier profiles.
 * Computes profile completeness from provided fields.
 */
class SupplierProfile {
  buildProfile(supplierData = {}) {
    const fields = ['name', 'gstin', 'category', 'turnover', 'yearsActive', 'certifications', 'state', 'city'];
    const provided = fields.filter(f => {
      const v = supplierData[f];
      return v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0);
    });

    const profileCompleteness = Math.round((provided.length / fields.length) * 100);

    let tier;
    if (profileCompleteness >= 90) tier = 'GOLD';
    else if (profileCompleteness >= 70) tier = 'SILVER';
    else if (profileCompleteness >= 50) tier = 'BRONZE';
    else tier = 'UNVERIFIED';

    return {
      ...supplierData,
      profileCompleteness,
      tier,
      fieldsProvided: provided.length,
      fieldsMissing: fields.length - provided.length,
      missingFields: fields.filter(f => !provided.includes(f))
    };
  }
}

module.exports = new SupplierProfile();
