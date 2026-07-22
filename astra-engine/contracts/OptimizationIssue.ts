/**
 * ASTRA Engine v1.5.2 — Optimization Issue Interface Contract
 */

export interface IAstraOptimizationIssue {
  id: string;
  engine: string;
  type: 'CONTENT_GAP' | 'LINK_OPPORTUNITY' | 'ANCHOR_OPTIMIZATION' | 'HEADING_STRUCTURE' | 'ENTITY_EXPANSION';
  severity: 'PASS' | 'RECOMMENDATION' | 'WARNING' | 'FAIL';
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  confidence: number;
  articleSlug: string;
  message: string;
  recommendation: string;
}
