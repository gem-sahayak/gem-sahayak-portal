export interface ScannedFile {
  relativePath: string;
  absolutePath: string;
  size: number;
  lastModified: Date;
  fingerprint: string;
}

export interface ScannerResult {
  files: Map<string, ScannedFile>;
  timestamp: Date;
  fingerprints: Map<string, string>;
}

export interface IScanner {
  scan(targetDirectory: string, exclusions: string[]): Promise<ScannerResult>;
}
