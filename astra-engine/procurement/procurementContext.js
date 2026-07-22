'use strict';

class ProcurementContext {
  constructor(data = {}) {
    this.context = new Map(Object.entries(data));
  }

  set(key, val) {
    this.context.set(key, val);
  }

  get(key) {
    return this.context.get(key);
  }
}

module.exports = ProcurementContext;
