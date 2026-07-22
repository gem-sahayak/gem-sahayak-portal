'use strict';

/**
 * ProcurementCalendar — Manages procurement events and deadlines.
 * Supports adding events, filtering upcoming events by days ahead.
 */
class ProcurementCalendar {
  constructor() {
    this.events = [];
  }

  addEvent(event) {
    this.events.push({
      title: event.title || 'Untitled',
      date: event.date || new Date().toISOString().split('T')[0],
      type: event.type || 'GENERIC',
      priority: event.priority || 'NORMAL'
    });
  }

  getUpcoming(daysAhead = 30) {
    const now = new Date();
    const cutoff = new Date(now.getTime() + daysAhead * 86400000);
    return this.events.filter(e => {
      const eventDate = new Date(e.date);
      return eventDate >= now && eventDate <= cutoff;
    });
  }

  getEvents() {
    return this.events;
  }

  clear() {
    this.events = [];
  }
}

module.exports = new ProcurementCalendar();
