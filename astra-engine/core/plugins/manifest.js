'use strict';

const fs = require('fs');
const path = require('path');

const ALLOWED_PERMISSIONS = new Set([
  'READ_REPORTS',
  'READ_STATE',
  'READ_RESULTS',
  'READ_GRAPH',
  'READ_REGISTRY'
]);

const ALLOWED_HOOKS = new Set([
  'beforeScan',
  'afterScan',
  'beforeEngine',
  'afterEngine',
  'beforeReport',
  'afterReport',
  'beforeValidate',
  'afterValidate'
]);

class PluginManifestValidator {
  validateManifest(manifest) {
    const errors = [];

    if (!manifest || typeof manifest !== 'object') {
      return { valid: false, errors: ['Manifest must be a non-null object'] };
    }

    if (!manifest.id || !/^[a-z0-9-]+$/.test(manifest.id)) {
      errors.push('Manifest "id" is required and must contain lowercase alphanumeric characters or hyphens');
    }

    if (!manifest.name || typeof manifest.name !== 'string') {
      errors.push('Manifest "name" is required and must be a string');
    }

    if (!manifest.version || typeof manifest.version !== 'string') {
      errors.push('Manifest "version" is required and must be a string');
    }

    if (!manifest.engineVersion) {
      errors.push('Manifest "engineVersion" is required');
    }

    if (!Array.isArray(manifest.permissions)) {
      errors.push('Manifest "permissions" must be an array');
    } else {
      for (const p of manifest.permissions) {
        if (!ALLOWED_PERMISSIONS.has(p)) {
          errors.push(`Unauthorized permission "${p}" requested in manifest`);
        }
      }
    }

    if (!Array.isArray(manifest.hooks)) {
      errors.push('Manifest "hooks" must be an array');
    } else {
      for (const h of manifest.hooks) {
        if (!ALLOWED_HOOKS.has(h)) {
          errors.push(`Unsupported hook "${h}" declared in manifest`);
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  loadAndValidate(manifestPath) {
    try {
      if (!fs.existsSync(manifestPath)) {
        return { valid: false, errors: [`Manifest file not found: ${manifestPath}`] };
      }
      const raw = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(raw);
      return this.validateManifest(manifest);
    } catch (e) {
      return { valid: false, errors: [`Failed to parse plugin.json: ${e.message}`] };
    }
  }
}

module.exports = new PluginManifestValidator();
