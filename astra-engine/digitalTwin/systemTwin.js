'use strict';

class SystemTwin {
  createTwin() {
    return {
      type: 'SYSTEM_TWIN',
      os: 'windows',
      engineVersion: '1.10.0',
      nodeVersion: process.version
    };
  }
}

module.exports = new SystemTwin();
