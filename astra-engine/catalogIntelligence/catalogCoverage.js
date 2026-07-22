'use strict';

class CatalogCoverage {
  getCoverage() {
    return { coveredCategories: 5, missingCategories: 0, coveragePercentage: 100 };
  }
}

module.exports = new CatalogCoverage();
