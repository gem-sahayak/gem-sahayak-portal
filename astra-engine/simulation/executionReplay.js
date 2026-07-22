'use strict';

class ExecutionReplay {
  replayTimeline(timelineEvents = []) {
    const replayed = [];
    for (const evt of timelineEvents) {
      replayed.push({
        replayedAt: new Date().toISOString(),
        originalEvent: evt,
        verdict: 'REPLAY_MATCH'
      });
    }
    return replayed;
  }
}

module.exports = new ExecutionReplay();
