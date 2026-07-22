'use strict';

class MessageValidator {
  validate(msg = {}) {
    return Boolean(msg.sender && msg.payload);
  }
}

module.exports = new MessageValidator();
