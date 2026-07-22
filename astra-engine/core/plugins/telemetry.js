'use strict';

class PluginTelemetryEngine {
  constructor() {
    this.records = new Map(); // pluginId -> stats
  }

  recordHookExecution(pluginId, hookName, executionTimeMs, status, errorMsg = null) {
    let stat = this.records.get(pluginId);
    if (!stat) {
      stat = {
        pluginId,
        totalCalls: 0,
        successCalls: 0,
        errorCalls: 0,
        timeoutCalls: 0,
        totalTimeMs: 0,
        maxTimeMs: 0,
        hooks: {}
      };
      this.records.set(pluginId, stat);
    }

    stat.totalCalls++;
    stat.totalTimeMs += executionTimeMs;
    if (executionTimeMs > stat.maxTimeMs) stat.maxTimeMs = executionTimeMs;

    if (status === 'SUCCESS') stat.successCalls++;
    else if (status === 'TIMEOUT') stat.timeoutCalls++;
    else if (status === 'ERROR') stat.errorCalls++;

    stat.hooks[hookName] = (stat.hooks[hookName] || 0) + 1;
  }

  getSnapshot() {
    const list = [];
    for (const [id, s] of this.records.entries()) {
      const avgTimeMs = s.totalCalls > 0 ? parseFloat((s.totalTimeMs / s.totalCalls).toFixed(2)) : 0;
      const successRatePct = s.totalCalls > 0 ? parseFloat(((s.successCalls / s.totalCalls) * 100).toFixed(2)) : 100.0;

      list.push({
        pluginId: id,
        totalCalls: s.totalCalls,
        successCalls: s.successCalls,
        errorCalls: s.errorCalls,
        timeoutCalls: s.timeoutCalls,
        avgTimeMs,
        maxTimeMs: s.maxTimeMs,
        successRatePct,
        hooks: s.hooks
      });
    }

    return {
      timestamp: new Date().toISOString(),
      pluginCount: list.length,
      telemetry: list
    };
  }

  clear() {
    this.records.clear();
  }
}

module.exports = new PluginTelemetryEngine();
