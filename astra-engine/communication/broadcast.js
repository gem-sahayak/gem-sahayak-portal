'use strict';

class BroadcastMessage {
  send(sender, payload) {
    return { type: 'BROADCAST', sender, payload, sentAt: new Date().toISOString() };
  }
}

module.exports = new BroadcastMessage();
