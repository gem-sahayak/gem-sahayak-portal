'use strict';

class ListenersRegistry {
  constructor() {
    this.listeners = new Map();
  }

  on(eventType, callback) {
    const list = this.listeners.get(eventType) || [];
    list.push(callback);
    this.listeners.set(eventType, list);
  }

  get(eventType) {
    return this.listeners.get(eventType) || [];
  }
}

module.exports = new ListenersRegistry();
