'use strict';

/**
 * In-Memory TTL Cache Engine.
 * Provides high-speed memory caching with configurable Time-To-Live (TTL)
 * and hit/miss telemetry tracking.
 */
class MemoryCache {
  constructor(defaultTtlMs = 60000) {
    this.defaultTtlMs = defaultTtlMs;
    this.store = new Map();
    this.hits = 0;
    this.misses = 0;
  }

  set(key, value, ttlMs = this.defaultTtlMs) {
    const expiresAt = Date.now() + ttlMs;
    this.store.set(key, { value, expiresAt });
  }

  get(key) {
    const entry = this.store.get(key);
    if (!entry) {
      this.misses++;
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      this.misses++;
      return null;
    }

    this.hits++;
    return entry.value;
  }

  has(key) {
    return this.get(key) !== null;
  }

  delete(key) {
    return this.store.delete(key);
  }

  clear() {
    this.store.clear();
    this.hits = 0;
    this.misses = 0;
  }

  getStats() {
    const total = this.hits + this.misses;
    const hitRatePct = total > 0 ? ((this.hits / total) * 100).toFixed(2) : '100.00';
    return {
      size: this.store.size,
      hits: this.hits,
      misses: this.misses,
      hitRatePct: parseFloat(hitRatePct)
    };
  }
}

module.exports = MemoryCache;
