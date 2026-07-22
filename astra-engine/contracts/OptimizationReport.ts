import { IAstraOptimizationIssue } from './OptimizationIssue';
import { IAstraOptimizationSuggestion } from './OptimizationSuggestion';
import { IAstraInternalLinkRecommendation } from './InternalLink';
import { IAstraAnchorSuggestion } from './AnchorSuggestion';
import { IAstraTopicSuggestion } from './TopicSuggestion';
import { IAstraFAQSuggestion } from './FAQSuggestion';

/**
 * ASTRA Engine v1.5.2 — Main AI Content Optimization Report Contract
 */

export interface IAstraOptimizationReport {
  engineVersion: string;
  evaluatedAt: string;
  summary: {
    overallOptimizationScore: number;
    totalArticlesAnalyzed: number;
    totalSuggestionsGenerated: number;
  };
  issues: IAstraOptimizationIssue[];
  suggestions: IAstraOptimizationSuggestion[];
  internalLinks: IAstraInternalLinkRecommendation[];
  anchors: IAstraAnchorSuggestion[];
  topicExpansions: IAstraTopicSuggestion[];
  faqSuggestions: IAstraFAQSuggestion[];
}
