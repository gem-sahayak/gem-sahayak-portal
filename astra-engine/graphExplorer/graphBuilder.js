'use strict';

const entityExplorer = require('./entityExplorer');
const keywordExplorer = require('./keywordExplorer');
const documentExplorer = require('./documentExplorer');
const clusterExplorer = require('./clusterExplorer');
const pluginExplorer = require('./pluginExplorer');
const dependencyExplorer = require('./dependencyExplorer');
const graphMetrics = require('./graphMetrics');

/**
 * Composite Master Graph Builder.
 * Combines nodes and edges across all specialized explorers.
 */
class GraphBuilder {
  buildCompositeGraph(state = {}) {
    const entNet = entityExplorer.buildEntityNetwork(state);
    const kwNet = keywordExplorer.buildKeywordNetwork();
    const docNet = documentExplorer.buildDocumentNetwork(state);
    const clsNet = clusterExplorer.buildClusterNetwork(state);
    const plgNet = pluginExplorer.buildPluginNetwork();
    const depNet = dependencyExplorer.buildDependencyNetwork();

    const nodes = [
      ...entNet.nodes,
      ...kwNet.nodes,
      ...docNet.nodes,
      ...clsNet.nodes,
      ...plgNet.nodes,
      ...depNet.nodes
    ];

    const edges = [
      ...entNet.edges,
      ...kwNet.edges,
      ...docNet.edges,
      ...clsNet.edges,
      ...plgNet.edges,
      ...depNet.edges
    ];

    // Compute PageRank & Degrees
    const pageRanks = graphMetrics.calculatePageRank(nodes, edges);
    for (const n of nodes) {
      n.pageRank = Math.round((pageRanks.get(n.id) || 0) * 10000) / 10000;
    }

    const orphans = graphMetrics.findOrphans(nodes, edges);

    return {
      nodes,
      edges,
      orphans,
      pageRanks,
      entityNetwork: entNet,
      dependencyNetwork: depNet,
      clusterNetwork: clsNet
    };
  }
}

module.exports = new GraphBuilder();
