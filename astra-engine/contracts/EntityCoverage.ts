/**
 * ASTRA Engine v1.5.1 — Entity Coverage Interface Contract
 */

export interface IAstraEntityItem {
  name: string;
  category: string;
  importance: number;
  coveredInCount: number;
  status: 'COVERED' | 'WEAK' | 'MISSING';
}

export interface IAstraEntityCoverageReport {
  totalEntitiesDetected: number;
  covered: IAstraEntityItem[];
  weak: IAstraEntityItem[];
  missing: IAstraEntityItem[];
}
