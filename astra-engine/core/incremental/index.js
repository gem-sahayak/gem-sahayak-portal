'use strict';

const incrementalComparer = require('./comparer');
const fingerprintManager = require('../fingerprint');

class IncrementalScanner {
  /**
   * Performs an incremental scan by comparing disk files to stored fingerprints.
   */
  scanIncremental(state) {
    const db = fingerprintManager.getDatabase();
    const diskFiles = state.filesystem?.files || new Map();

    const comparison = incrementalComparer.compare(diskFiles, db);

    // Update fingerprint database with newly added/modified files and purge deleted ones
    for (const addPath of comparison.added) {
      const fileObj = diskFiles.get(addPath);
      if (fileObj) {
        fingerprintManager.fingerprintFile(addPath, fileObj.absolutePath);
      }
    }

    for (const modPath of comparison.modified) {
      const fileObj = diskFiles.get(modPath);
      if (fileObj) {
        fingerprintManager.fingerprintFile(modPath, fileObj.absolutePath);
      }
    }

    for (const delPath of comparison.deleted) {
      db.delete(delPath);
    }

    db.save();

    return {
      comparison,
      isFullScanRequired: comparison.added.length > 0 || comparison.modified.length > 0 || comparison.deleted.length > 0
    };
  }
}

module.exports = new IncrementalScanner();
