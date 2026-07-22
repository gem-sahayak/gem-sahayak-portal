import { IAstraKnowledgeChunk } from './KnowledgeChunk';
import { IAstraCitation } from './Citation';

/**
 * ASTRA Engine v1.6.0 — Main Knowledge Intelligence Report Contract
 */

export interface IAstraKnowledgeReport {
  engineVersion: string;
  evaluatedAt: string;
  summary: {
    totalDocumentsIndexed: number;
    totalChunksGenerated: number;
    vectorStoreSize: number;
    cacheHitRatio: number;
  };
  sampleChunks: IAstraKnowledgeChunk[];
  sampleCitations: IAstraCitation[];
}
