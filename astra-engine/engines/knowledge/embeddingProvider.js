'use strict';

/**
 * Embedding Provider Abstraction.
 * Supports Mock, OpenAI, Gemini, Claude, Ollama, vLLM providers.
 * Default Mock Provider generates deterministic 16-dim embeddings offline.
 */
class BaseEmbeddingProvider {
  constructor(name = 'mock-provider') {
    this.name = name;
  }

  async getEmbedding(text = '') {
    // Deterministic 16-dimensional embedding vector derived from text hash
    const vector = new Array(16).fill(0);
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      vector[i % 16] = (vector[i % 16] + charCode) % 100 / 100;
    }
    return vector;
  }
}

class MockEmbeddingProvider extends BaseEmbeddingProvider {
  constructor() {
    super('mock-embedding-provider');
  }
}

module.exports = {
  BaseEmbeddingProvider,
  MockEmbeddingProvider,
  defaultProvider: new MockEmbeddingProvider()
};
