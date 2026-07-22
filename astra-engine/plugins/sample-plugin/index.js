'use strict';

class SampleAuditPlugin {
  async executeHook(hookName, context) {
    if (hookName === 'afterScan') {
      return { status: 'OK', inspectedState: !!context.stateSnapshot };
    }
    if (hookName === 'afterReport') {
      return { status: 'OK', inspectedReports: !!context.reportsSnapshot };
    }
    return { status: 'SKIPPED' };
  }
}

module.exports = SampleAuditPlugin;
