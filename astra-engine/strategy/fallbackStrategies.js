'use strict';

class FallbackStrategies {
  getFallbackStrategies() {
    return [{ id: 'st-fallback-safe', name: 'Safe Memory Snapshot Restore' }];
  }
}

module.exports = new FallbackStrategies();
