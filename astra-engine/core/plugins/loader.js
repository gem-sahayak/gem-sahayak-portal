'use strict';

const fs = require('fs');
const path = require('path');
const manifestValidator = require('./manifest');
const pluginRegistry = require('./registry');
const sandbox = require('./sandbox');
const { pluginTrustManager, TRUST_LEVELS } = require('./trust');
const signatureVerifier = require('./signature');
const dependencyResolver = require('./dependency');
const versionManager = require('./version');
const pluginTelemetry = require('./telemetry');

const DEFAULT_PLUGINS_DIR = path.resolve(__dirname, '../../plugins');
const DEFAULT_HOOK_TIMEOUT_MS = 5000;

class PluginLoader {
  constructor(pluginsDir = DEFAULT_PLUGINS_DIR) {
    this.pluginsDir = pluginsDir;
  }

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

  loadPluginFromDir(pluginDir) {
    const manifestPath = path.join(pluginDir, 'plugin.json');
    const valRes = manifestValidator.loadAndValidate(manifestPath);

    if (!valRes.valid) {
      throw new Error(`Invalid manifest in ${pluginDir}: ${valRes.errors.join(', ')}`);
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    // 1. Version Compatibility Check
    const versionRes = versionManager.validateEngineCompatibility(manifest, '1.3.1');
    if (!versionRes.compatible) {
      throw new Error(`Plugin "${manifest.id}" incompatible: ${versionRes.errors.join(', ')}`);
    }

    // 2. Signature Check
    const sigRes = signatureVerifier.verifySignature(pluginDir);

    // 3. Trust Level Check
    const trustLevel = pluginTrustManager.getTrustLevel(manifest, sigRes.verified);
    if (!pluginTrustManager.isExecutionAllowed(trustLevel)) {
      throw new Error(`Plugin "${manifest.id}" is BLOCKED by trust policy`);
    }

    // 4. Entry Point Check
    const entryFile = path.join(pluginDir, 'index.js');
    if (!fs.existsSync(entryFile)) {
      throw new Error(`Plugin entry point "index.js" missing in ${pluginDir}`);
    }

    const pluginModule = require(entryFile);
    const instance = typeof pluginModule === 'function' ? new pluginModule() : pluginModule;

    manifest.trustLevel = trustLevel;
    manifest.signatureValid = sigRes.verified;

    const record = pluginRegistry.register(manifest, instance, pluginDir);
    return record;
  }

  /**
   * Executes a hook across active plugins using deterministic topological dependency order,
   * timeout protection (5000 ms), and crash isolation.
   */
  async executeHook(hookName, rawContext = {}, timeoutMs = DEFAULT_HOOK_TIMEOUT_MS) {
    const results = [];
    const pluginsMap = pluginRegistry.plugins;

    // Resolve topological execution order
    const depRes = dependencyResolver.resolveExecutionOrder(pluginsMap);
    const orderedIds = depRes.order;

    for (const pluginId of orderedIds) {
      const record = pluginRegistry.find(pluginId);
      if (!record || !record.enabled || !record.manifest.hooks.includes(hookName)) continue;

      const t0 = Date.now();
      const sandboxCtx = sandbox.createContext(record.manifest, rawContext);

      try {
        // Timeout protection wrapper
        const hookPromise = Promise.resolve().then(async () => {
          if (typeof record.instance.executeHook === 'function') {
            return await record.instance.executeHook(hookName, sandboxCtx);
          } else if (typeof record.instance[hookName] === 'function') {
            return await record.instance[hookName](sandboxCtx);
          }
          return null;
        });

        let isTimedOut = false;
        const timeoutPromise = new Promise((_, reject) => {
          const timer = setTimeout(() => {
            isTimedOut = true;
            reject(new Error(`Plugin "${pluginId}" hook "${hookName}" timed out after ${timeoutMs}ms`));
          }, timeoutMs);
          if (timer.unref) timer.unref();
        });

        const hookData = await Promise.race([hookPromise, timeoutPromise]);
        const elapsed = Date.now() - t0;

        pluginTelemetry.recordHookExecution(pluginId, hookName, elapsed, 'SUCCESS');
        results.push({
          pluginId,
          hookName,
          status: 'SUCCESS',
          executionTimeMs: elapsed,
          data: hookData
        });
      } catch (err) {
        const elapsed = Date.now() - t0;
        const isTimeout = err.message.includes('timed out');
        const status = isTimeout ? 'TIMEOUT' : 'ERROR';

        pluginTelemetry.recordHookExecution(pluginId, hookName, elapsed, status, err.message);

        results.push({
          pluginId,
          hookName,
          status,
          executionTimeMs: elapsed,
          error: err.message
        });

        console.warn(`[Plugin Isolation Warning] ${err.message}`);
        // Engine continues executing despite individual plugin crash or timeout
      }
    }

    return results;
  }
}

module.exports = new PluginLoader();
