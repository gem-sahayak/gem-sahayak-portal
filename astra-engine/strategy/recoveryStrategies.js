'use strict';

class RecoveryStrategies {
  getRecoveryStrategies() {
    return [{ id: 'st-recovery', name: 'Automatic Sandbox Reset' }];
  }
}

module.exports = new RecoveryStrategies();
