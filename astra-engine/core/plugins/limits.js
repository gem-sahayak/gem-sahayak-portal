'use strict';

const MAX_HOOK_EXECUTIONS = 1000;
const MAX_MEMORY_HEAP_DELTA_MB = 50.0;

class PluginResourceLimits {
  constructor() {
    this.pluginCounts = new Map(); // id -> count
  }

  checkLimits(pluginId, currentHeapUsedMB, initialHeapUsedMB) {
    const count = (this.pluginCounts.get(pluginId) || 0) + 1;
    this.pluginCounts.set(pluginId, count);

    const violations = [];
    if (count > MAX_HOOK_EXECUTIONS) {
      violations.push(`Exceeded max hook executions limit (${count}/${MAX_HOOK_EXECUTIONS})`);
    }

    const heapDelta = currentHeapUsedMB - initialHeapUsedMB;
    if (heapDelta > MAX_MEMORY_HEAP_DELTA_MB) {
      violations.push(`Exceeded max memory heap delta (${heapDelta.toFixed(2)} MB / ${MAX_MEMORY_HEAP_DELTA_MB} MB limit)`);
    }

    return {
      exceeded: violations.length > 0,
      violations
    };
  }

  reset() {
    this.pluginCounts.clear();
  }
}

module.exports = new PluginResourceLimits();
