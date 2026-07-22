import { IAstraKnowledgeChunk } from './KnowledgeChunk';
import { IAstraCitation } from './Citation';

/**
 * ASTRA Engine v1.6.0 — Context Window Interface Contract
 */

export interface IAstraContextWindow {
  totalTokensEstimate: number;
  maxTokenBudget: number;
  chunksIncluded: IAstraKnowledgeChunk[];
  citations: IAstraCitation[];
}
