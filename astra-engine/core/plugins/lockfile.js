'use strict';

const fs = require('fs');
const path = require('path');
const pluginRegistry = require('./registry');
const signatureVerifier = require('./signature');
const { validateReportPath } = require('../guards/pathGuard');

const LOCKFILE_PATH = path.resolve(__dirname, '../../reports/cache/plugin-lock.json');

class PluginLockfileManager {
  generateLockfile() {
    const list = pluginRegistry.list();
    const lockedPlugins = {};

    for (const p of list) {
      const record = pluginRegistry.find(p.id);
      const entryFile = path.join(record.path, 'index.js');
      const checksum = signatureVerifier.calculateChecksum(entryFile);

      lockedPlugins[p.id] = {
        name: p.name,
        version: p.version,
        publisher: record.manifest.publisher || record.manifest.author || 'Unknown',
        trustLevel: record.manifest.trustLevel || 'UNSIGNED',
        checksum: checksum || 'NONE',
        dependencies: record.manifest.dependencies || {},
        permissions: p.permissions,
        hooks: p.hooks
      };
    }

    const lockData = {
      lockfileVersion: '1.0.0',
      engineVersion: '1.3.2',
      generatedAt: new Date().toISOString(),
      plugins: lockedPlugins
    };

    const targetPath = validateReportPath(LOCKFILE_PATH);
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(targetPath, JSON.stringify(lockData, null, 2), 'utf8');
    return lockData;
  }

  loadLockfile() {
    if (!fs.existsSync(LOCKFILE_PATH)) return null;
    try {
      const raw = fs.readFileSync(LOCKFILE_PATH, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
}

module.exports = new PluginLockfileManager();
