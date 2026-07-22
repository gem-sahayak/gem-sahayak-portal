'use strict';

class CatalogMetrics {
  constructor() {
    this.totalCatalogsAudited = 0;
  }

  recordAudit() {
    this.totalCatalogsAudited++;
  }

  getMetrics() {
    return { totalCatalogsAudited: this.totalCatalogsAudited };
  }
}

module.exports = new CatalogMetrics();
