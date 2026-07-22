'use strict';

const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');

/**
 * Keyword Network Explorer.
 */
class KeywordExplorer {
  buildKeywordNetwork() {
    const nodes = [];
    const edges = [];

    const keywords = ['gem portal helper', 'udyam error', 'emd exemption', 'l1 tender bidder'];
    for (const kw of keywords) {
      const id = `kw-${kw.replace(/\s+/g, '-')}`;
      nodes.push(nodeFactory.createNode(id, 'KEYWORD', kw));
    }

    if (nodes.length >= 2) {
      edges.push(edgeFactory.createEdge(nodes[0].id, nodes[1].id, 'SEMANTIC_SIMILARITY'));
    }

    return { nodes, edges };
  }
}

module.exports = new KeywordExplorer();
