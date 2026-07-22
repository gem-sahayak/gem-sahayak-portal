'use strict';

const messageQueue = require('./messageQueue');
const messageSerializer = require('./messageSerializer');
const messageValidator = require('./messageValidator');
const messageHistory = require('./messageHistory');
const communicationMetrics = require('./communicationMetrics');

class MessageBus {
  publish(msg) {
    if (!messageValidator.validate(msg)) return { published: false, error: 'INVALID_MSG' };
    messageQueue.enqueue(msg);
    messageHistory.record(msg);
    communicationMetrics.recordMessage();
    return { published: true, queueSize: messageQueue.size() };
  }
}

module.exports = new MessageBus();
