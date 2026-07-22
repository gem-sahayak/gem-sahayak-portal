'use strict';

class FailurePrediction {
  predictFailures() {
    return [
      { id: 'fail-1', type: 'EXECUTION_FAILURE', probability: 0.02, level: 'LOW' }
    ];
  }
}

module.exports = new FailurePrediction();
