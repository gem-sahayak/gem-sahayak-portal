'use strict';

class ProcurementLifecycle {
  constructor() {
    this.stage = 'DRAFT';
  }

  transition(newStage) {
    this.stage = newStage;
    return this.stage;
  }

  getStage() {
    return this.stage;
  }
}

module.exports = ProcurementLifecycle;
