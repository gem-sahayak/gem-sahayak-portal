'use strict';

const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');

/**
 * Document, Chunk & Vector Explorer.
 */
class DocumentExplorer {
  buildDocumentNetwork(state = {}) {
    const nodes = [];
    const edges = [];

    const articles = state.parsedRegistry?.articles || [];
    for (const a of articles) {
      const artNode = nodeFactory.createNode(`doc-${a.slug}`, 'ARTICLE', a.title || a.slug);
      nodes.push(artNode);

      const chkNode = nodeFactory.createNode(`chk-${a.slug}-1`, 'CHUNK', `Chunk 1 (${a.slug})`);
      nodes.push(chkNode);

      const vecNode = nodeFactory.createNode(`vec-${a.slug}-1`, 'VECTOR', `Vector (${a.slug})`);
      nodes.push(vecNode);

      edges.push(edgeFactory.createEdge(artNode.id, chkNode.id, 'DOCUMENT_CHUNK'));
      edges.push(edgeFactory.createEdge(chkNode.id, vecNode.id, 'CHUNK_VECTOR'));
    }

    return { nodes, edges };
  }
}

module.exports = new DocumentExplorer();
