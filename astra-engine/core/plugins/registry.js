'use strict';

/**
 * Runtime Plugin Registry for ASTRA Engine.
 * Manages plugin lifecycle state transitions, registration, enabling/disabling, and listing.
 */
class PluginRegistry {
  constructor() {
    this.plugins = new Map(); // id -> { instance, manifest, state, path }
  }

  register(manifest, instance, pluginPath = '') {
    if (this.plugins.has(manifest.id)) {
      throw new Error(`Plugin with ID "${manifest.id}" is already registered`);
    }

    const record = {
      id: manifest.id,
      name: manifest.name,
      version: manifest.version,
      manifest,
      instance,
      path: pluginPath,
      enabled: true,
      registeredAt: new Date().toISOString()
    };

    this.plugins.set(manifest.id, record);
    return record;
  }

  unregister(pluginId) {
    return this.plugins.delete(pluginId);
  }

  enable(pluginId) {
    const record = this.plugins.get(pluginId);
    if (!record) throw new Error(`Plugin "${pluginId}" not found`);
    record.enabled = true;
    return record;
  }

  disable(pluginId) {
    const record = this.plugins.get(pluginId);
    if (!record) throw new Error(`Plugin "${pluginId}" not found`);
    record.enabled = false;
    return record;
  }

  find(pluginId) {
    return this.plugins.get(pluginId) || null;
  }

  list() {
    return Array.from(this.plugins.values()).map(p => ({
      id: p.id,
      name: p.name,
      version: p.version,
      enabled: p.enabled,
      path: p.path,
      permissions: p.manifest.permissions,
      hooks: p.manifest.hooks
    }));
  }

  clear() {
    this.plugins.clear();
  }
}

module.exports = new PluginRegistry();
