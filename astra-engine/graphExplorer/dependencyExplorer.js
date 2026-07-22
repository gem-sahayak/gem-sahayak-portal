'use strict';

const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');

/**
 * System Dependency Network Explorer.
 */
class DependencyExplorer {
  buildDependencyNetwork() {
    const nodes = [
      nodeFactory.createNode('mod-scanner', 'MODULE', 'Filesystem Scanner'),
      nodeFactory.createNode('mod-parser', 'MODULE', 'Parser Engine'),
      nodeFactory.createNode('mod-knowledge', 'MODULE', 'Knowledge Engine'),
      nodeFactory.createNode('mod-optimizer', 'MODULE', 'Optimizer Engine')
    ];

    const edges = [
      edgeFactory.createEdge('mod-parser', 'mod-scanner', 'DEPENDENCY'),
      edgeFactory.createEdge('mod-knowledge', 'mod-parser', 'DEPENDENCY'),
      edgeFactory.createEdge('mod-optimizer', 'mod-knowledge', 'DEPENDENCY')
    ];

    return { nodes, edges };
  }
}

module.exports = new DependencyExplorer();
