'use strict';

const documentIndexer = require('./documentIndexer');
const chunkEngine = require('./chunkEngine');
const { defaultProvider } = require('./embeddingProvider');
const vectorStore = require('./vectorStore');
const retriever = require('./retriever');
const reranker = require('./reranker');
const contextBuilder = require('./contextBuilder');
const queryPlanner = require('./queryPlanner');
const answerPlanner = require('./answerPlanner');
const citationEngine = require('./citationEngine');
const knowledgeGraphBridge = require('./knowledgeGraphBridge');
const cacheManager = require('./cacheManager');
const recommendationEngine = require('./recommendation');

class KnowledgeEngine {
  constructor() {
    this.manifest = {
      name: 'Enterprise Knowledge Intelligence Platform',
      version: '1.6.0',
      description: 'Offline deterministic vector index, RAG retrieval pipeline, context builder & citation engine'
    };
    this.chunksMap = new Map();
  }

  async init(ctx = {}) {
    // Initialization
  }

  async run(state) {
    const docs = documentIndexer.extractDocuments(state);
    const chunks = chunkEngine.chunkDocuments(docs);

    this.chunksMap.clear();
    for (const chk of chunks) {
      this.chunksMap.set(chk.chunkId, chk);
      const vec = await defaultProvider.getEmbedding(chk.content);
      vectorStore.insert(chk.chunkId, vec, chk.metadata);
    }

    const sampleQuery = 'Udyam Aadhaar verification failure on GeM portal';
    const queryPlan = queryPlanner.planQuery(sampleQuery);
    const retrieved = await retriever.retrieve(sampleQuery, 5, this.chunksMap);
    const reranked = reranker.rerank(retrieved, sampleQuery);
    const contextWindow = contextBuilder.buildContext(reranked, 2048);
    const answerPlan = answerPlanner.planAnswer(queryPlan, contextWindow);
    const citationsFormatted = citationEngine.formatCitations(contextWindow.citations);
    const bridge = knowledgeGraphBridge.bridgeGraph(chunks, state);
    const recs = recommendationEngine.generateRecommendations(docs.length, chunks.length, vectorStore.size());
    const cacheStats = cacheManager.getStats();

    return {
      manifest: this.manifest,
      verdict: 'PASS',
      errors: [],
      warnings: [],
      summary: {
        totalDocumentsIndexed: docs.length,
        totalChunksGenerated: chunks.length,
        vectorStoreSize: vectorStore.size(),
        cacheHitRatio: cacheStats.hitRatio
      },
      documents: docs,
      chunks,
      queryPlan,
      retrievedResults: reranked,
      contextWindow,
      answerPlan,
      citationsFormatted,
      bridge,
      recommendations: recs,
      cacheStats
    };
  }
}

module.exports = KnowledgeEngine;
