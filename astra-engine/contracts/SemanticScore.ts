/**
 * ASTRA Engine v1.5.1 — Semantic Score Interface Contract
 */

export interface IAstraSemanticCategoryScores {
  intent: number;
  entities: number;
  authority: number;
  coverage: number;
  clusters: number;
  cannibalization: number;
  links: number;
  readability: number;
  seo: number;
  freshness: number;
}

export interface IAstraSemanticScore {
  overallScore: number;
  categoryScores: IAstraSemanticCategoryScores;
  evaluatedAt: string;
}
