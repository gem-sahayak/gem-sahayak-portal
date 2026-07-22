/**
 * ASTRA Engine v1.6.0 — Knowledge Chunk Interface Contract
 */

export interface IAstraKnowledgeChunk {
  chunkId: string;
  parentId: string;
  sourceType: 'ARTICLE' | 'HUB' | 'FAQ' | 'TOOL' | 'REGISTRY' | 'REPORT';
  chunkType: 'SEMANTIC' | 'HEADING' | 'PARAGRAPH' | 'FAQ' | 'TABLE' | 'TOOL';
  content: string;
  metadata: {
    title: string;
    slug: string;
    category?: string;
    sectionHeading?: string;
  };
  embedding?: number[];
}
