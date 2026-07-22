/**
 * ASTRA Engine v1.3.0 — Plugin Interface Contract
 * Defines the public contract required for external read-only ASTRA plugins.
 */

export interface IAstraPluginManifest {
  id: string;
  name: string;
  version: string;
  author: string;
  engineVersion: string;
  description: string;
  permissions: Array<'READ_REPORTS' | 'READ_STATE' | 'READ_RESULTS' | 'READ_GRAPH' | 'READ_REGISTRY'>;
  hooks: Array<
    | 'beforeScan'
    | 'afterScan'
    | 'beforeEngine'
    | 'afterEngine'
    | 'beforeReport'
    | 'afterReport'
    | 'beforeValidate'
    | 'afterValidate'
  >;
}

export interface IAstraPlugin {
  manifest: IAstraPluginManifest;
  init?(context: any): Promise<void>;
  executeHook?(hookName: string, context: any): Promise<any>;
  shutdown?(): Promise<void>;
}
