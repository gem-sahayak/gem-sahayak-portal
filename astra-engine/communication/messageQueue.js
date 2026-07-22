'use strict';

class MessageQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(msg) {
    this.queue.push(msg);
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }
}

module.exports = new MessageQueue();
