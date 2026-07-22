'use strict';

const messageBus = require('./messageBus');
const messageQueue = require('./messageQueue');
const messageSerializer = require('./messageSerializer');
const messageValidator = require('./messageValidator');
const messageHistory = require('./messageHistory');
const broadcast = require('./broadcast');
const multicast = require('./multicast');
const directMessage = require('./directMessage');
const communicationMetrics = require('./communicationMetrics');

module.exports = {
  messageBus,
  messageQueue,
  messageSerializer,
  messageValidator,
  messageHistory,
  broadcast,
  multicast,
  directMessage,
  communicationMetrics
};
