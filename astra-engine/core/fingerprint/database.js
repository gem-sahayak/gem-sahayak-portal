'use strict';

const fs = require('fs');
const path = require('path');
const { validateReportPath } = require('../guards/pathGuard');

const DEFAULT_DB_PATH = path.resolve(__dirname, '../../reports/cache/fingerprint-db.json');

/**
 * Fingerprint Database Storage Engine.
 * Persists file fingerprints to reports/cache/fingerprint-db.json using pathGuard.
 */
class FingerprintDatabase {
  constructor(dbPath = DEFAULT_DB_PATH) {
    this.dbPath = dbPath;
    this.entries = new Map();
    this.metadata = {
      engineVersion: '1.2.0',
      schemaVersion: '1.0.0',
      lastUpdated: null,
      compositeFingerprint: null
    };
  }

  load() {
    try {
      if (fs.existsSync(this.dbPath)) {
        const raw = fs.readFileSync(this.dbPath, 'utf8');
        const data = JSON.parse(raw);
        if (data.entries && typeof data.entries === 'object') {
          for (const [key, val] of Object.entries(data.entries)) {
            this.entries.set(key, val);
          }
        }
        if (data.metadata) {
          this.metadata = { ...this.metadata, ...data.metadata };
        }
      }
    } catch (e) {
      console.warn(`[FingerprintDB Warning] Failed to load fingerprint database: ${e.message}`);
    }
  }

  save() {
    try {
      const resolvedPath = validateReportPath(this.dbPath);
      const dir = path.dirname(resolvedPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      this.metadata.lastUpdated = new Date().toISOString();
      const output = {
        metadata: this.metadata,
        entries: Object.fromEntries(this.entries)
      };

      fs.writeFileSync(resolvedPath, JSON.stringify(output, null, 2), 'utf8');
    } catch (e) {
      console.error(`[FingerprintDB Error] Failed to save database: ${e.message}`);
    }
  }

  get(filePath) {
    return this.entries.get(filePath) || null;
  }

  set(filePath, record) {
    this.entries.set(filePath, {
      filePath,
      hash: record.hash,
      mtime: record.mtime || Date.now(),
      size: record.size || 0,
      lastScan: new Date().toISOString(),
      engineVersion: '1.2.0',
      schemaVersion: '1.0.0'
    });
  }

  delete(filePath) {
    return this.entries.delete(filePath);
  }

  clear() {
    this.entries.clear();
  }

  size() {
    return this.entries.size;
  }
}

module.exports = FingerprintDatabase;
