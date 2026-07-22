'use strict';

class MessageSerializer {
  serialize(msg) {
    return JSON.stringify(msg);
  }

  deserialize(str) {
    return JSON.parse(str);
  }
}

module.exports = new MessageSerializer();
