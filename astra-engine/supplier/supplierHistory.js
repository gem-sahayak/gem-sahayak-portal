'use strict';

/**
 * SupplierHistory — Tracks supplier lifecycle events with timestamps.
 */
class SupplierHistory {
  constructor() {
    this.events = [];
  }

  recordEvent(event) {
    this.events.push({ ...event, timestamp: new Date().toISOString() });
  }

  getHistory() {
    return this.events;
  }

  getEventsByType(type) {
    return this.events.filter(e => e.type === type);
  }

  clear() {
    this.events = [];
  }
}

module.exports = new SupplierHistory();
