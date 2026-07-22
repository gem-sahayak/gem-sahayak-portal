/**
 * ASTRA Engine v1.6.0 — Knowledge Query Interface Contract
 */

export interface IAstraKnowledgeQuery {
  queryId: string;
  queryString: string;
  searchType: 'SEMANTIC' | 'KEYWORD' | 'HYBRID' | 'METADATA';
  topK: number;
  namespace?: string;
  categoryFilter?: string;
}
