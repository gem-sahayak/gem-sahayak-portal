'use strict';

const Module = require('module');
const path = require('path');

/**
 * ASTRA Engine — Production Import Guard
 * 
 * Prevents any ASTRA module from importing production application code.
 * Rule #0: ASTRA is an Observer, never an Editor.
 * This guard ensures ASTRA never loads or executes production modules.
 */

const BLOCKED_PATH_PATTERNS = [
  '/src/',
  '/app/',
  '/posts/',
  '/extension/',
];

const BLOCKED_MODULE_NAMES = [
  'next',
  'react',
  'react-dom',
];

const ALLOWED_BUILTINS = new Set([
  'fs', 'path', 'crypto', 'os', 'url', 'buffer', 'stream',
  'util', 'events', 'assert', 'module', 'string_decoder',
  'querystring', 'http', 'https', 'zlib', 'constants',
]);

let guardActive = false;
const originalResolveFilename = Module._resolveFilename;

class ImportGuardError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ImportGuardError';
  }
}

/**
 * Activate the import guard.
 * Once active, any require() call from within astra-engine/ that attempts
 * to load a production module will throw ImportGuardError.
 */
function activateGuard() {
  if (guardActive) return;
  guardActive = true;

  Module._resolveFilename = function (request, parent, isMain, options) {
    // Determine if the calling module is inside astra-engine
    const parentFile = parent && parent.filename
      ? parent.filename.replace(/\\/g, '/')
      : '';
    const isAstraModule = parentFile.includes('/astra-engine/');

    if (isAstraModule) {
      // Allow Node.js built-in modules
      const builtins = Module.builtinModules || [];
      if (builtins.includes(request) || ALLOWED_BUILTINS.has(request)) {
        return originalResolveFilename.call(this, request, parent, isMain, options);
      }

      // Block specific module names
      const requestBase = request.split('/')[0];
      if (BLOCKED_MODULE_NAMES.includes(requestBase)) {
        throw new ImportGuardError(
          `Blocked import of module "${request}". Production dependencies cannot be imported by ASTRA Engine.`
        );
      }

      // Check request path for forbidden patterns
      const normalizedRequest = request.replace(/\\/g, '/');
      for (const pattern of BLOCKED_PATH_PATTERNS) {
        if (normalizedRequest.includes(pattern)) {
          throw new ImportGuardError(
            `Blocked import path "${request}". Contains forbidden pattern "${pattern}".`
          );
        }
      }

      // Resolve the path and check the resolved absolute path too
      const resolved = originalResolveFilename.call(this, request, parent, isMain, options);
      const normalizedResolved = resolved.replace(/\\/g, '/');

      for (const pattern of BLOCKED_PATH_PATTERNS) {
        if (normalizedResolved.includes(pattern)) {
          throw new ImportGuardError(
            `Blocked resolved import "${resolved}". Resolves to a production path containing "${pattern}".`
          );
        }
      }

      return resolved;
    }

    // Non-astra modules pass through unguarded
    return originalResolveFilename.call(this, request, parent, isMain, options);
  };
}

/**
 * Deactivate the import guard. Restores original require behavior.
 */
function deactivateGuard() {
  if (!guardActive) return;
  Module._resolveFilename = originalResolveFilename;
  guardActive = false;
}

/**
 * Check if the guard is currently active.
 */
function isGuardActive() {
  return guardActive;
}

module.exports = {
  activateGuard,
  deactivateGuard,
  isGuardActive,
  ImportGuardError,
  BLOCKED_PATH_PATTERNS,
  BLOCKED_MODULE_NAMES,
};
