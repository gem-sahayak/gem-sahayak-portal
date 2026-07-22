'use strict';

const fs = require('fs');
const path = require('path');
const manifestValidator = require('./manifest');
const pluginRegistry = require('./registry');
const sandbox = require('./sandbox');
const { validateReportPath } = require('../guards/pathGuard');

const DEFAULT_PLUGINS_DIR = path.resolve(__dirname, '../../plugins');

/**
 * Plugin Loader & Lifecycle Manager.
 * Discovers, validates, loads/unloads plugins, and executes hook pipelines.
 * Enforces strict read-only permissions and path/import security boundaries.
 */
class PluginLoader {
  constructor(pluginsDir = DEFAULT_PLUGINS_DIR) {
    this.pluginsDir = pluginsDir;
  }

  /**
   * Discovers plugins in the plugins directory.
   */
  discoverPlugins() {
    const discovered = [];
    if (!fs.existsSync(this.pluginsDir)) return discovered;

    const items = fs.readdirSync(this.pluginsDir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        const pluginFolder = path.join(this.pluginsDir, item.name);
        const manifestPath = path.join(pluginFolder, 'plugin.json');
        if (fs.existsSync(manifestPath)) {
          discovered.push({ folder: pluginFolder, manifestPath });
        }
      }
    }

    return discovered;
  }

  /**
   * Loads a plugin from folder.
   */
  loadPluginFromDir(pluginDir) {
    const manifestPath = path.join(pluginDir, 'plugin.json');
    const valRes = manifestValidator.loadAndValidate(manifestPath);

    if (!valRes.valid) {
      throw new Error(`Invalid manifest in ${pluginDir}: ${valRes.errors.join(', ')}`);
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    // Check entry point JS file
    const entryFile = path.join(pluginDir, 'index.js');
    if (!fs.existsSync(entryFile)) {
      throw new Error(`Plugin entry point "index.js" missing in ${pluginDir}`);
    }

    // Require plugin module cleanly
    const pluginModule = require(entryFile);
    const instance = typeof pluginModule === 'function' ? new pluginModule() : pluginModule;

    const record = pluginRegistry.register(manifest, instance, pluginDir);
    return record;
  }

  /**
   * Executes a lifecycle hook across all active plugins subscribing to that hook.
   */
  async executeHook(hookName, rawContext = {}) {
    const results = [];
    const activePlugins = pluginRegistry.list().filter(p => p.enabled && p.hooks.includes(hookName));

    for (const pMeta of activePlugins) {
      const record = pluginRegistry.find(pMeta.id);
      if (!record || !record.instance) continue;

      const t0 = Date.now();
      const sandboxCtx = sandbox.createContext(record.manifest, rawContext);

      try {
        let hookData = null;
        if (typeof record.instance.executeHook === 'function') {
          hookData = await record.instance.executeHook(hookName, sandboxCtx);
        } else if (typeof record.instance[hookName] === 'function') {
          hookData = await record.instance[hookName](sandboxCtx);
        }

        results.push({
          pluginId: record.id,
          hookName,
          status: 'SUCCESS',
          executionTimeMs: Date.now() - t0,
          data: hookData
        });
      } catch (err) {
        results.push({
          pluginId: record.id,
          hookName,
          status: 'ERROR',
          executionTimeMs: Date.now() - t0,
          error: err.message
        });
      }
    }

    return results;
  }
}

module.exports = new PluginLoader();
