'use strict';

class MulticastMessage {
  send(sender, recipients = [], payload) {
    return { type: 'MULTICAST', sender, recipients, payload, sentAt: new Date().toISOString() };
  }
}

module.exports = new MulticastMessage();
