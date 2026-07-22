'use strict';

/**
  * Helper to recursively deep freeze an object to guarantee immutability.
  */
function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Retrieve the property names defined on object
  const propNames = Reflect.ownKeys(obj);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

class StateManager {
  constructor() {
    this.state = deepFreeze(this.createEmptyState());
  }

  createEmptyState() {
    return {
      timestamp: new Date(),
      filesystem: {
        files: new Map(),
        rootPath: ''
      },
      parsedRegistry: {
        articles: [],
        categories: [],
        tools: [],
        faqs: []
      },
      metadataMap: new Map(),
      linkingGraph: {
        nodes: [],
        edges: []
      }
    };
  }

  /**
    * Returns the frozen, immutable state snapshot.
    */
  getStateSnapshot() {
    return this.state;
  }

  /**
    * Safely updates the state snapshot by creating a new frozen clone.
    */
  updateState(updater) {
    // Clone maps and array wrappers to prevent reference pollution
    const draft = {
      timestamp: new Date(),
      filesystem: {
        files: new Map(this.state.filesystem.files),
        rootPath: this.state.filesystem.rootPath
      },
      parsedRegistry: {
        articles: [...this.state.parsedRegistry.articles],
        categories: [...this.state.parsedRegistry.categories],
        tools: [...this.state.parsedRegistry.tools],
        faqs: [...this.state.parsedRegistry.faqs]
      },
      metadataMap: new Map(this.state.metadataMap),
      linkingGraph: {
        nodes: [...this.state.linkingGraph.nodes],
        edges: [...this.state.linkingGraph.edges]
      }
    };

    updater(draft);

    // Deep freeze to guarantee Rule #0 observer safety
    this.state = deepFreeze(draft);
  }
}

module.exports = new StateManager();
