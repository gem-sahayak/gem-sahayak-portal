'use strict';

/**
 * Node Factory.
 * Instantiates graph nodes supporting Articles, FAQs, Tools, Hubs, Entities, Keywords, Plugins, Reports, Chunks, Vectors, etc.
 */
class NodeFactory {
  createNode(id, type, label, metadata = {}) {
    return {
      id: String(id),
      type, // 'ARTICLE' | 'FAQ' | 'TOOL' | 'HUB' | 'ENTITY' | 'KEYWORD' | 'PLUGIN' | 'REPORT' | 'CHUNK' | 'VECTOR'
      label: label || id,
      degree: 0,
      pageRank: 0,
      metadata
    };
  }
}

module.exports = new NodeFactory();
