import { EngineResult } from './Engine';

export interface AuditSummary {
  timestamp: Date;
  overallVerdict: 'PASS' | 'WARNING' | 'FAIL';
  totalEnginesRun: number;
  totalErrors: number;
  totalWarnings: number;
  executionTimeMs: number;
}

export interface ReportData {
  summary: AuditSummary;
  results: EngineResult[];
  schemaVersion: string;
  engineVersion: string;
}

export interface IReporter {
  format: 'json' | 'markdown' | 'html' | 'terminal';
  build(data: ReportData): Promise<string>;
  write(content: string, outputPath: string): Promise<void>;
}
