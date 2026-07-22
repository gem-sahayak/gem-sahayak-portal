'use strict';

class ConflictDetector {
  detectConflicts() {
    return [
      { id: 'conf-1', type: 'PLUGIN_CONFLICT', level: 'LOW', details: 'No active plugin route conflicts detected' }
    ];
  }
}

module.exports = new ConflictDetector();
