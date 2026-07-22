'use strict';

class EventQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(event) {
    this.queue.push(event);
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }
}

module.exports = new EventQueue();
