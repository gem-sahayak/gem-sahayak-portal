/**
 * ASTRA Engine v1.5.2 — FAQ Suggestion Interface Contract
 */

export interface IAstraFAQSuggestion {
  articleSlug: string;
  question: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced' | 'Transactional' | 'Informational';
  suggestedAnswerOutline: string;
}
