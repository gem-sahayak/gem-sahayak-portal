'use strict';

class CrashRecovery {
  recover(agentId) {
    return { recovered: true, agentId, strategy: 'AUTOMATIC_RESTART' };
  }
}

module.exports = new CrashRecovery();
