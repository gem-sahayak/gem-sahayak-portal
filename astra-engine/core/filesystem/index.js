'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class FilesystemScanner {
  constructor() {
    this.exclusions = [];
  }

  /**
   * Generates a SHA256 checksum for a file.
   */
  calculateHash(filePath) {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const hashSum = crypto.createHash('sha256');
      hashSum.update(fileBuffer);
      return hashSum.digest('hex');
    } catch (e) {
      console.warn(`[Filesystem Warning] Could not hash file ${filePath}: ${e.message}`);
      return '';
    }
  }

  /**
   * Scans a directory recursively and populates file details into the inventory.
   */
  scanDir(dirPath, rootDir, inventory) {
    let entries;
    try {
      entries = fs.readdirSync(dirPath, { withFileTypes: true });
    } catch (e) {
      console.warn(`[Filesystem Warning] Could not read directory ${dirPath}: ${e.message}`);
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

      // Check if entry name or relative path matches exclusions
      const isExcluded = this.exclusions.some(exc => {
        return entry.name === exc || relativePath.startsWith(exc + '/') || relativePath === exc;
      });

      if (isExcluded) {
        continue;
      }

      if (entry.isDirectory()) {
        inventory.folders.push(relativePath);
        this.scanDir(fullPath, rootDir, inventory);
      } else if (entry.isFile()) {
        try {
          const stats = fs.statSync(fullPath);
          const ext = path.extname(entry.name).toLowerCase();
          const fingerprint = this.calculateHash(fullPath);

          inventory.files.set(relativePath, {
            relativePath,
            absolutePath: fullPath,
            size: stats.size,
            lastModified: stats.mtime,
            created: stats.birthtime,
            extension: ext,
            fingerprint
          });
        } catch (e) {
          console.warn(`[Filesystem Warning] Could not get stats for file ${fullPath}: ${e.message}`);
        }
      }
    }
  }

  /**
   * Interface execution method.
   */
  async scan(targetDirectory, exclusions = []) {
    this.exclusions = exclusions;
    
    const inventory = {
      files: new Map(),
      folders: [],
      timestamp: new Date()
    };

    if (fs.existsSync(targetDirectory)) {
      this.scanDir(targetDirectory, targetDirectory, inventory);
    }

    return inventory;
  }
}

module.exports = new FilesystemScanner();
