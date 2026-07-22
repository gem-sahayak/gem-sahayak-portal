'use strict';

class SandboxRuntime {
  createSandbox(initialState = {}) {
    return {
      id: `sandbox-${Math.random().toString(36).substring(2, 8)}`,
      memoryState: new Map(Object.entries(initialState)),
      snapshots: [],
      isolated: true
    };
  }

  takeSnapshot(sandbox) {
    const snap = {
      timestamp: new Date().toISOString(),
      state: Object.fromEntries(sandbox.memoryState)
    };
    sandbox.snapshots.push(snap);
    return snap;
  }
}

module.exports = new SandboxRuntime();
