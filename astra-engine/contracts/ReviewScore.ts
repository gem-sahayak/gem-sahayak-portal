/**
 * ASTRA Engine v1.5.0 — Review Score Interface Contract
 */

export interface IAstraReviewCategoryScores {
  intent: number;
  authority: number;
  completeness: number;
  readability: number;
  seo: number;
  entities: number;
  internalLinks: number;
  eeat: number;
  freshness: number;
}

export interface IAstraReviewScore {
  overallScore: number;
  categoryScores: IAstraReviewCategoryScores;
  articleCount: number;
  evaluatedAt: string;
}
