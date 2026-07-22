'use strict';

const KnowledgeEngine = require('./knowledgeEngine');
const documentIndexer = require('./documentIndexer');
const chunkEngine = require('./chunkEngine');
const { BaseEmbeddingProvider, MockEmbeddingProvider, defaultProvider } = require('./embeddingProvider');
const vectorStore = require('./vectorStore');
const retriever = require('./retriever');
const reranker = require('./reranker');
const contextBuilder = require('./contextBuilder');

const defaultEngine = new KnowledgeEngine();

module.exports = {
  knowledgeEngine: defaultEngine,
  KnowledgeEngine,
  documentIndexer,
  chunkEngine,
  BaseEmbeddingProvider,
  MockEmbeddingProvider,
  defaultProvider,
  vectorStore,
  retriever,
  reranker,
  contextBuilder
};
