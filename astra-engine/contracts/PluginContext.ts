/**
 * ASTRA Engine v1.3.0 — Plugin Context Interface Contract
 * Defines immutable context passed into plugin lifecycle hooks.
 */

export interface IAstraPluginContext {
  engineVersion: string;
  timestamp: string;
  config: any;
  permissions: string[];
  stateSnapshot?: any;
  reportsSnapshot?: any;
  resultsSnapshot?: any;
  graphSnapshot?: any;
  registrySnapshot?: any;
}
