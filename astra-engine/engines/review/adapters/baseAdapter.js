'use strict';

/**
 * Base AI Provider Adapter for ASTRA Engine.
 * Abstraction layer supporting OpenAI, Gemini, Claude, Ollama, or Mock adapters.
 */
class BaseAiAdapter {
  constructor(name = 'base-ai-adapter') {
    this.name = name;
  }

  async review(articleData) {
    throw new Error(`[BaseAiAdapter] "review()" method must be implemented by concrete subclass`);
  }
}

module.exports = BaseAiAdapter;
