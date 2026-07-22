'use strict';

const FingerprintDatabase = require('./database');
const {
  calculateFileHash,
  calculateStringHash,
  calculateObjectHash,
  calculateCompositeFingerprint
} = require('./hash');

class FingerprintManager {
  constructor(dbPath) {
    this.db = new FingerprintDatabase(dbPath);
    this.db.load();
  }

  getDatabase() {
    return this.db;
  }

  /**
   * Generates or updates fingerprint for a file.
   */
  fingerprintFile(relPath, absPath, statObj = {}) {
    const hash = calculateFileHash(absPath);
    if (!hash) return null;

    const record = {
      hash,
      mtime: statObj.mtimeMs || Date.now(),
      size: statObj.size || 0
    };

    this.db.set(relPath, record);
    return this.db.get(relPath);
  }

  /**
   * Generates composite workspace fingerprint from all file fingerprints,
   * registry hash, and graph hash.
   */
  generateWorkspaceFingerprint(state) {
    const fileHashes = [];
    for (const [relPath, entry] of this.db.entries.entries()) {
      fileHashes.push(`${relPath}:${entry.hash}`);
    }

    const registryHash = calculateObjectHash(state.parsedRegistry || {});
    const graphHash = calculateObjectHash(state.linkingGraph || {});

    const composite = calculateCompositeFingerprint([
      ...fileHashes,
      registryHash,
      graphHash
    ]);

    this.db.metadata.compositeFingerprint = composite;
    this.db.save();

    return {
      compositeFingerprint: composite,
      registryHash,
      graphHash,
      fileCount: this.db.size()
    };
  }
}

module.exports = new FingerprintManager();
