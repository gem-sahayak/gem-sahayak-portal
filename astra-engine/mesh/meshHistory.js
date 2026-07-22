'use strict';

class MeshHistory {
  constructor() {
    this.history = [];
  }

  recordEvent(evt) {
    this.history.unshift({ timestamp: new Date().toISOString(), evt });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = new MeshHistory();
