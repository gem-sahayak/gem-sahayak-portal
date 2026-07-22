'use strict';

class TimelineTrace {
  traceTimeline() {
    return { timelineSteps: ['Init', 'Scan', 'Audit', 'Report'] };
  }
}

module.exports = new TimelineTrace();
