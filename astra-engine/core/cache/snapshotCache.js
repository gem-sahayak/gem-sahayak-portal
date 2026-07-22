'use strict';

const MemoryCache = require('./memoryCache');

/**
 * Snapshot & Domain Cache Manager for ASTRA Engine.
 * Manages specialized sub-caches for Registry, Graph, Metadata, and State snapshots.
 */
class SnapshotCacheManager {
  constructor() {
    this.stateCache = new MemoryCache(120000);
    this.registryCache = new MemoryCache(120000);
    this.graphCache = new MemoryCache(120000);
    this.metadataCache = new MemoryCache(120000);
  }

  cacheStateSnapshot(hash, snapshot) {
    this.stateCache.set(hash, snapshot);
  }

  getStateSnapshot(hash) {
    return this.stateCache.get(hash);
  }

  cacheParsedRegistry(hash, parsedRegistry) {
    this.registryCache.set(hash, parsedRegistry);
  }

  getParsedRegistry(hash) {
    return this.registryCache.get(hash);
  }

  cacheGraphTopology(hash, topology) {
    this.graphCache.set(hash, topology);
  }

  getGraphTopology(hash) {
    return this.graphCache.get(hash);
  }

  clearAll() {
    this.stateCache.clear();
    this.registryCache.clear();
    this.graphCache.clear();
    this.metadataCache.clear();
  }

  getAllStats() {
    return {
      state: this.stateCache.getStats(),
      registry: this.registryCache.getStats(),
      graph: this.graphCache.getStats(),
      metadata: this.metadataCache.getStats()
    };
  }
}

module.exports = SnapshotCacheManager;
