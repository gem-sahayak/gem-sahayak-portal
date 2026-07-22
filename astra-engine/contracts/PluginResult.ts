/**
 * ASTRA Engine v1.3.0 — Plugin Result Interface Contract
 * Defines execution result payload returned by plugins.
 */

export interface IAstraPluginResult {
  pluginId: string;
  hookName: string;
  status: 'SUCCESS' | 'SKIPPED' | 'ERROR';
  executionTimeMs: number;
  data?: any;
  error?: string;
}
