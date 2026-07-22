'use strict';

class ReasoningContext {
  constructor(data = {}) {
    this.facts = new Map(Object.entries(data.facts || {}));
    this.constraints = new Map(Object.entries(data.constraints || {}));
  }

  addFact(key, val) {
    this.facts.set(key, val);
  }

  getFact(key) {
    return this.facts.get(key);
  }
}

module.exports = ReasoningContext;
