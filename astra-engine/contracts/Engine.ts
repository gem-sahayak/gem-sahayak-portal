export interface EngineManifest {
  name: string;
  version: string;
  owner: string;
  capabilities: string[];
  dependencies: string[];
}

export interface EngineContext {
  config: any;
  state: any;
  eventBus: any;
  logger: any;
}

export interface EngineResult {
  engineName: string;
  verdict: 'PASS' | 'WARNING' | 'FAIL';
  errors: ValidationError[];
  warnings: ValidationError[];
  executionTimeMs: number;
}

export interface ValidationError {
  code: string;
  message: string;
  file?: string;
  line?: number;
  evidence?: any;
}

export interface IAstraEngine {
  manifest: EngineManifest;
  init(context: EngineContext): Promise<void>;
  run(stateSnapshot: any): Promise<EngineResult>;
}
