'use strict';

const EventEmitter = require('events');

/**
 * Event Bus Types
 */
const EVENT_TYPES = {
  SCAN_STARTED: 'SCAN_STARTED',
  SCAN_COMPLETED: 'SCAN_COMPLETED',
  ENGINE_STARTED: 'ENGINE_STARTED',
  ENGINE_COMPLETED: 'ENGINE_COMPLETED',
  REPORT_GENERATED: 'REPORT_GENERATED',
  CACHE_UPDATED: 'CACHE_UPDATED',
  FILE_CHANGED: 'FILE_CHANGED',
  VALIDATION_FAILED: 'VALIDATION_FAILED'
};

/**
 * EventBus Implementation for ASTRA Engine (Phase 4A).
 * Activates contracts/Event.ts. Provides decoupled publish/subscribe
 * streaming for real-time engine telemetry and status event listeners.
 */
class EventBus {
  constructor() {
    this.emitter = new EventEmitter();
    this.emitter.setMaxListeners(50);
    this.eventHistory = [];
  }

  subscribe(eventType, listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('EventBus listener must be a function');
    }
    this.emitter.on(eventType, listener);
    return () => this.emitter.off(eventType, listener);
  }

  subscribeAll(listener) {
    const handlers = [];
    for (const evt of Object.values(EVENT_TYPES)) {
      const unsub = this.subscribe(evt, (payload) => listener(evt, payload));
      handlers.push(unsub);
    }
    return () => handlers.forEach(unsub => unsub());
  }

  publish(eventType, payload = {}) {
    const eventObj = {
      id: 'EVT-' + Math.random().toString(36).substring(2, 9),
      type: eventType,
      timestamp: new Date().toISOString(),
      payload
    };

    this.eventHistory.push(eventObj);
    if (this.eventHistory.length > 500) {
      this.eventHistory.shift();
    }

    this.emitter.emit(eventType, eventObj);
    return eventObj;
  }

  getHistory() {
    return [...this.eventHistory];
  }

  clearHistory() {
    this.eventHistory = [];
  }

  clearAllListeners() {
    this.emitter.removeAllListeners();
  }
}

module.exports = {
  EventBus,
  EVENT_TYPES
};
