import { IAstraReviewScore } from './ReviewScore';
import { IAstraReviewIssue } from './ReviewIssue';

/**
 * ASTRA Engine v1.5.0 — AI Review Main Interface Contract
 */

export interface IAstraReviewReport {
  engineVersion: string;
  evaluatedAt: string;
  summary: {
    overallScore: number;
    totalArticlesEvaluated: number;
    totalRecommendations: number;
  };
  scores: IAstraReviewScore;
  issues: IAstraReviewIssue[];
  recommendations: Array<{
    articleSlug: string;
    missingTopics: string[];
    suggestedHeading: string;
    reason: string;
    impact: 'HIGH' | 'MEDIUM' | 'LOW';
    confidence: number;
    priority: string;
  }>;
}
