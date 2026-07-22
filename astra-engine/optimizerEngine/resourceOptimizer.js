'use strict';

class ResourceOptimizer {
  optimizeResources() {
    return { heapAllocLimitMB: 512, gcStrategy: 'PASSIVE' };
  }
}

module.exports = new ResourceOptimizer();
