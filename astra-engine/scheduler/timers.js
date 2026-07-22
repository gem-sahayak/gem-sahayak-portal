'use strict';

class TimersManager {
  createTimer(delayMs, callback) {
    return {
      timerId: `tmr-${Math.random().toString(36).substring(2, 8)}`,
      delayMs,
      createdAt: new Date().toISOString()
    };
  }
}

module.exports = new TimersManager();
