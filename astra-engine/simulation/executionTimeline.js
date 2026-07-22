'use strict';

class ExecutionTimeline {
  constructor() {
    this.events = [];
  }

  recordEvent(timeOffsetMs, name, details = {}) {
    this.events.push({
      offsetMs: timeOffsetMs,
      name,
      details,
      timestamp: new Date().toISOString()
    });
  }

  getTimeline() {
    return this.events;
  }
}

module.exports = new ExecutionTimeline();
