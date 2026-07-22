'use strict';

const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');

/**
 * Entity Network Explorer.
 */
class EntityExplorer {
  buildEntityNetwork(state = {}) {
    const nodes = [];
    const edges = [];

    const entities = [
      'Udyam Aadhaar', 'EMD Refund', 'GFR Rule 170', 'L1 Margin Calculator',
      'NSIC Registration', 'ePBG Bank Guarantee', 'Technical Bid Scrutiny'
    ];

    for (const ent of entities) {
      const id = `ent-${ent.toLowerCase().replace(/\s+/g, '-')}`;
      nodes.push(nodeFactory.createNode(id, 'ENTITY', ent));
    }

    if (nodes.length >= 2) {
      edges.push(edgeFactory.createEdge(nodes[0].id, nodes[1].id, 'ENTITY_RELATION'));
      edges.push(edgeFactory.createEdge(nodes[1].id, nodes[2].id, 'ENTITY_RELATION'));
    }

    return { nodes, edges };
  }
}

module.exports = new EntityExplorer();
