'use strict';

class MeshState {
  constructor() {
    this.sharedState = new Map();
  }

  set(key, val) {
    this.sharedState.set(key, val);
  }

  get(key) {
    return this.sharedState.get(key);
  }
}

module.exports = new MeshState();
