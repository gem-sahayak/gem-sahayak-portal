/**
 * ASTRA Engine v1.5.0 — Review Issue Interface Contract
 */

export interface IAstraReviewIssue {
  id: string;
  engine: string;
  severity: 'PASS' | 'RECOMMENDATION' | 'WARNING' | 'FAIL';
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  score: number;
  confidence: number;
  category: 'Intent' | 'Authority' | 'Completeness' | 'Readability' | 'SEO' | 'Entities' | 'Internal Links' | 'EEAT' | 'Freshness';
  message: string;
  recommendation: string;
  reason: string;
}
