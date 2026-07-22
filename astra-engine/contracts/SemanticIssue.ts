/**
 * ASTRA Engine v1.5.1 — Semantic Issue Interface Contract
 */

export interface IAstraSemanticIssue {
  id: string;
  engine: string;
  type: 'CANNIBALIZATION' | 'SIMILARITY_OVERLAP' | 'MISSING_ENTITY' | 'THIN_TOPICAL_AUTHORITY' | 'LINK_GAP';
  severity: 'PASS' | 'RECOMMENDATION' | 'WARNING' | 'FAIL';
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  confidence: number;
  articleSlug: string;
  competingSlug?: string;
  message: string;
  recommendation: string;
}
