'use strict';

class ParallelStrategies {
  getParallelStrategies() {
    return [{ id: 'st-parallel', name: 'Parallel Engine Execution', maxWorkers: 4 }];
  }
}

module.exports = new ParallelStrategies();
