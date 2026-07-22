/**
 * ASTRA Engine v1.5.2 — Optimization Suggestion Interface Contract
 */

export interface IAstraOptimizationSuggestion {
  articleSlug: string;
  type: string;
  description: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  confidence: number;
  estimatedSeoImpact: 'HIGH' | 'MEDIUM' | 'LOW';
  difficulty: 'EASY' | 'MODERATE' | 'HARD';
}
