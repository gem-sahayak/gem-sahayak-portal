'use strict';

const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');

/**
 * Content Cluster (Hub-and-Spoke) Explorer.
 */
class ClusterExplorer {
  buildClusterNetwork(state = {}) {
    const nodes = [];
    const edges = [];

    const categories = state.parsedRegistry?.categories || ['gem-registration', 'gem-bidding', 'compliance-policy', 'catalog-management'];
    for (const cat of categories) {
      const catSlug = typeof cat === 'string' ? cat : cat.slug;
      const hubNode = nodeFactory.createNode(`hub-${catSlug}`, 'HUB', `${catSlug} Hub`);
      nodes.push(hubNode);
    }

    const articles = state.parsedRegistry?.articles || [];
    for (const a of articles) {
      const artNode = nodeFactory.createNode(`art-${a.slug}`, 'ARTICLE', a.title || a.slug);
      nodes.push(artNode);

      if (a.category) {
        edges.push(edgeFactory.createEdge(`hub-${a.category}`, artNode.id, 'HUB_PILLAR'));
      }
    }

    return { nodes, edges };
  }
}

module.exports = new ClusterExplorer();
