'use strict';

class RuleRegistry {
  constructor() {
    this.rules = new Map();
  }

  register(rule) {
    this.rules.set(rule.id, rule);
  }

  list() {
    return Array.from(this.rules.values());
  }
}

module.exports = new RuleRegistry();
