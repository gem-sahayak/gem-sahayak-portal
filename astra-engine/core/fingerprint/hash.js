'use strict';

const crypto = require('crypto');
const fs = require('fs');

/**
 * Fingerprint Hash Utilities for ASTRA Engine.
 * Generates SHA256 fingerprints for files, metadata, registry items, graph topology,
 * and composite workspace fingerprints.
 */

function calculateFileHash(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(buffer).digest('hex');
  } catch (e) {
    return null;
  }
}

function calculateStringHash(content) {
  return crypto.createHash('sha256').update(String(content)).digest('hex');
}

function calculateObjectHash(obj) {
  try {
    const jsonStr = JSON.stringify(obj, Object.keys(obj || {}).sort());
    return crypto.createHash('sha256').update(jsonStr).digest('hex');
  } catch (e) {
    return null;
  }
}

function calculateCompositeFingerprint(hashes = []) {
  const combined = hashes.filter(Boolean).sort().join('::');
  return crypto.createHash('sha256').update(combined).digest('hex');
}

module.exports = {
  calculateFileHash,
  calculateStringHash,
  calculateObjectHash,
  calculateCompositeFingerprint
};
