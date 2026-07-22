import { IAstraCitation } from './Citation';

/**
 * ASTRA Engine v1.6.0 — Knowledge Answer Plan Interface Contract
 * Note: Planning ONLY, NO LLM text generation.
 */

export interface IAstraKnowledgeAnswerPlan {
  queryId: string;
  reasoningSteps: string[];
  evidencePlan: string[];
  citationsPlan: IAstraCitation[];
}
