'use strict';

class ProcurementRegistry {
  constructor() {
    this.records = new Map();
  }

  registerRecord(id, record) {
    this.records.set(id, { id, record, registeredAt: new Date().toISOString() });
  }

  list() {
    return Array.from(this.records.values());
  }
}

module.exports = new ProcurementRegistry();
