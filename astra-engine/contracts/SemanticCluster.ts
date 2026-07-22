/**
 * ASTRA Engine v1.5.1 — Semantic Cluster Interface Contract
 */

export interface IAstraSemanticClusterNode {
  hubSlug: string;
  category: string;
  pillarArticles: string[];
  supportingArticles: string[];
  faqs: string[];
  tools: string[];
  topicalAuthorityScore: number;
}
