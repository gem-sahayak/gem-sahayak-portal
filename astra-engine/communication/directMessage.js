'use strict';

class DirectMessage {
  send(sender, recipient, payload) {
    return { type: 'DIRECT', sender, recipient, payload, sentAt: new Date().toISOString() };
  }
}

module.exports = new DirectMessage();
