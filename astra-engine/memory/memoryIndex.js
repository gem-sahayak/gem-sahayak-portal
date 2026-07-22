'use strict';

class MemoryIndex {
  constructor() {
    this.index = new Map();
  }

  indexItem(key, ref) {
    this.index.set(key, ref);
  }

  search(key) {
    return this.index.get(key);
  }
}

module.exports = new MemoryIndex();
