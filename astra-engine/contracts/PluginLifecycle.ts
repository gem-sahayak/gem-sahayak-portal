/**
 * ASTRA Engine v1.3.0 — Plugin Lifecycle Interface Contract
 * Defines valid lifecycle state transitions for plugins.
 */

export enum PluginLifecycleState {
  DISCOVERED = 'DISCOVERED',
  VALIDATED = 'VALIDATED',
  LOADED = 'LOADED',
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  UNLOADED = 'UNLOADED'
}
