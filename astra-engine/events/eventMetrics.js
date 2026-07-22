'use strict';

class EventMetrics {
  constructor() {
    this.totalPublished = 0;
    this.totalDispatched = 0;
  }

  recordPublish() {
    this.totalPublished++;
  }

  recordDispatch() {
    this.totalDispatched++;
  }

  getMetrics() {
    return {
      totalPublished: this.totalPublished,
      totalDispatched: this.totalDispatched
    };
  }
}

module.exports = new EventMetrics();
