import { IAstraKnowledgeChunk } from './KnowledgeChunk';

/**
 * ASTRA Engine v1.6.0 — Retrieval Result Interface Contract
 */

export interface IAstraRetrievalResult {
  chunk: IAstraKnowledgeChunk;
  similarityScore: number;
  rerankScore: number;
}
