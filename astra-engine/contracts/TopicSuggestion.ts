/**
 * ASTRA Engine v1.5.2 — Topic Suggestion Interface Contract
 */

export interface IAstraTopicSuggestion {
  articleSlug: string;
  suggestedH2: string[];
  suggestedH3: string[];
  suggestedExamples: string[];
  reason: string;
}
