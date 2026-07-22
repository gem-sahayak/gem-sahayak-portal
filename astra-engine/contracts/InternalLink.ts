/**
 * ASTRA Engine v1.5.2 — Internal Link Recommendation Interface Contract
 */

export interface IAstraInternalLinkRecommendation {
  sourceSlug: string;
  targetSlug: string;
  linkType: 'HUB' | 'PILLAR' | 'FAQ' | 'TOOL' | 'RELATED';
  anchorSuggestion: string;
  reason: string;
  estimatedSeoImpact: 'HIGH' | 'MEDIUM' | 'LOW';
}
