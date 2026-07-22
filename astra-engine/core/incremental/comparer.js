'use strict';

const fs = require('fs');
const { calculateFileHash } = require('../fingerprint/hash');

/**
 * Incremental File Comparer.
 * Classifies files as added, modified, deleted, or unchanged by comparing disk state
 * against Fingerprint Database records.
 */
class IncrementalComparer {
  compare(diskFilesMap, fingerprintDb) {
    const added = [];
    const modified = [];
    const deleted = [];
    const unchanged = [];

    const diskKeys = new Set(diskFilesMap.keys());
    const dbEntries = fingerprintDb.entries;

    // Check disk files against database entries
    for (const [relPath, fileObj] of diskFilesMap.entries()) {
      const dbRecord = dbEntries.get(relPath);

      if (!dbRecord) {
        added.push(relPath);
      } else {
        const currentHash = calculateFileHash(fileObj.absolutePath);
        if (currentHash !== dbRecord.hash) {
          modified.push(relPath);
        } else {
          unchanged.push(relPath);
        }
      }
    }

    // Check database entries for deleted files
    for (const dbPath of dbEntries.keys()) {
      if (!diskKeys.has(dbPath)) {
        deleted.push(dbPath);
      }
    }

    const total = diskFilesMap.size;
    const changedCount = added.length + modified.length + deleted.length;
    const hitRate = total > 0 ? (((unchanged.length) / total) * 100).toFixed(2) : '100.00';
    const savedPct = total > 0 ? (((unchanged.length) / total) * 100).toFixed(2) : '100.00';

    return {
      added,
      modified,
      deleted,
      unchanged,
      stats: {
        totalFiles: total,
        addedCount: added.length,
        modifiedCount: modified.length,
        deletedCount: deleted.length,
        unchangedCount: unchanged.length,
        fingerprintHitRatePct: parseFloat(hitRate),
        incrementalSavedPct: parseFloat(savedPct)
      }
    };
  }
}

module.exports = new IncrementalComparer();
