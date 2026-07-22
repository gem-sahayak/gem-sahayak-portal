'use strict';

class SemanticMemory {
  constructor() {
    this.concepts = new Map();
  }

  storeConcept(name, details) {
    this.concepts.set(name, details);
  }

  getConcept(name) {
    return this.concepts.get(name);
  }
}

module.exports = new SemanticMemory();
