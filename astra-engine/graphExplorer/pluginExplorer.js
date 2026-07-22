'use strict';

const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');

/**
 * Plugin Dependency & Trust Graph Explorer.
 */
class PluginExplorer {
  buildPluginNetwork() {
    const nodes = [
      nodeFactory.createNode('plg-core-validator', 'PLUGIN', 'Core Validator Plugin'),
      nodeFactory.createNode('plg-seo-enhancer', 'PLUGIN', 'SEO Enhancer Plugin')
    ];

    const edges = [
      edgeFactory.createEdge('plg-seo-enhancer', 'plg-core-validator', 'PLUGIN_DEPENDENCY')
    ];

    return { nodes, edges };
  }
}

module.exports = new PluginExplorer();
