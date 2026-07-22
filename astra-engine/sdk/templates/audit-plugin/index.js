'use strict';

class CustomAuditPlugin {
  async executeHook(hookName, context) {
    if (hookName === 'afterScan') {
      return { status: 'SUCCESS', filesInspected: context.stateSnapshot?.filesystem?.filesCount || 0 };
    }
    return null;
  }
}

module.exports = CustomAuditPlugin;
