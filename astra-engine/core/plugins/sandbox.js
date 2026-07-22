'use strict';

/**
 * Deep freezes an object recursively to prevent plugin mutation.
 */
function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Object.isFrozen(obj)) return obj;

  Object.freeze(obj);
  for (const key of Reflect.ownKeys(obj)) {
    const val = obj[key];
    if (val !== null && (typeof val === 'object' || typeof val === 'function')) {
      deepFreeze(val);
    }
  }
  return obj;
}

/**
 * Plugin Context Sandbox Engine.
 * Filters and deeply freezes context snapshots according to granted read permissions.
 * Throws explicit permission errors if write or unauthorized reads are attempted.
 */
class PluginSandbox {
  createContext(manifest, fullContext = {}) {
    const grantedPermissions = new Set(manifest.permissions || []);
    const sandboxContext = {
      engineVersion: '1.3.0',
      timestamp: new Date().toISOString(),
      pluginId: manifest.id,
      grantedPermissions: Array.from(grantedPermissions)
    };

    if (grantedPermissions.has('READ_STATE') && fullContext.state) {
      sandboxContext.stateSnapshot = deepFreeze(JSON.parse(JSON.stringify(fullContext.state)));
    }

    if (grantedPermissions.has('READ_REGISTRY') && fullContext.parsedRegistry) {
      sandboxContext.registrySnapshot = deepFreeze(JSON.parse(JSON.stringify(fullContext.parsedRegistry)));
    }

    if (grantedPermissions.has('READ_GRAPH') && fullContext.graphTopology) {
      sandboxContext.graphSnapshot = deepFreeze(JSON.parse(JSON.stringify(fullContext.graphTopology)));
    }

    if (grantedPermissions.has('READ_REPORTS') && fullContext.reports) {
      sandboxContext.reportsSnapshot = deepFreeze(JSON.parse(JSON.stringify(fullContext.reports)));
    }

    if (grantedPermissions.has('READ_RESULTS') && fullContext.results) {
      sandboxContext.resultsSnapshot = deepFreeze(JSON.parse(JSON.stringify(fullContext.results)));
    }

    // Freeze root sandbox context
    return deepFreeze(sandboxContext);
  }

  assertPermission(manifest, requiredPermission) {
    const permissions = new Set(manifest.permissions || []);
    if (!permissions.has(requiredPermission)) {
      throw new Error(`[Plugin Security Error] Plugin "${manifest.id}" lacks required permission "${requiredPermission}"`);
    }
  }
}

module.exports = new PluginSandbox();
