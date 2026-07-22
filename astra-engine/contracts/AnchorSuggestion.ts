/**
 * ASTRA Engine v1.5.2 — Anchor Suggestion Interface Contract
 */

export interface IAstraAnchorSuggestion {
  targetSlug: string;
  anchorType: 'NATURAL' | 'EXACT' | 'PARTIAL' | 'BRAND' | 'QUESTION' | 'SEMANTIC';
  anchorText: string;
  overOptimizationRisk: 'LOW' | 'MEDIUM' | 'HIGH';
}
