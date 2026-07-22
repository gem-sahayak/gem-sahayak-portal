'use strict';

class MemorySnapshots {
  takeSnapshot(memoryState = {}) {
    return {
      snapshotId: `snap-${Math.random().toString(36).substring(2, 8)}`,
      timestamp: new Date().toISOString(),
      memoryState
    };
  }
}

module.exports = new MemorySnapshots();
