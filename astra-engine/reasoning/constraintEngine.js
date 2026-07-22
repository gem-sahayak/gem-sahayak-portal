'use strict';

class ConstraintEngine {
  evaluateConstraints() {
    return [
      { id: 'cst-1', name: 'No Production Mutations', satisfied: true },
      { id: 'cst-2', name: 'Offline Execution Only', satisfied: true }
    ];
  }
}

module.exports = new ConstraintEngine();
