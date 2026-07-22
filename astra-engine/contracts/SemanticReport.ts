import { IAstraSemanticScore } from './SemanticScore';
import { IAstraSemanticIssue } from './SemanticIssue';
import { IAstraSemanticClusterNode } from './SemanticCluster';
import { IAstraEntityCoverageReport } from './EntityCoverage';

/**
 * ASTRA Engine v1.5.1 — Main Semantic SEO Report Interface Contract
 */

export interface IAstraSemanticReport {
  engineVersion: string;
  evaluatedAt: string;
  summary: {
    overallScore: number;
    totalArticles: number;
    clustersCount: number;
    cannibalizationIssues: number;
  };
  scores: IAstraSemanticScore;
  issues: IAstraSemanticIssue[];
  clusters: IAstraSemanticClusterNode[];
  entityCoverage: IAstraEntityCoverageReport;
}
