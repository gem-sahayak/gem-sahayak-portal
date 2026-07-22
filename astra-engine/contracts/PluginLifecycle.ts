/**
 * ASTRA Engine v1.3.1 — Extended Plugin Lifecycle Contract
 * Defines deterministic state transitions for enterprise plugins.
 */

export enum PluginLifecycleState {
  DISCOVERED = 'DISCOVERED',
  VALIDATED = 'VALIDATED',
  VERIFIED = 'VERIFIED',
  REGISTERED = 'REGISTERED',
  LOADED = 'LOADED',
  ENABLED = 'ENABLED',
  RUNNING = 'RUNNING',
  DISABLED = 'DISABLED',
  UNLOADED = 'UNLOADED',
  ERROR = 'ERROR'
}
