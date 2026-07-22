'use strict';

class ResourcePlanner {
  planResources() {
    return { maxWorkers: 4, heapLimitMB: 512 };
  }
}

module.exports = new ResourcePlanner();
