'use strict';

const SnapshotCacheManager = require('./snapshotCache');

const defaultCacheManager = new SnapshotCacheManager();

module.exports = {
  cacheManager: defaultCacheManager,
  SnapshotCacheManager
};
