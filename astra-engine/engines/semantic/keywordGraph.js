'use strict';

/**
 * Keyword Graph & Semantic Relationship Mapper.
 * Generates reports/latest/keyword-graph.json.
 */
class KeywordGraphBuilder {
  buildGraph(articles = []) {
    const nodes = [];
    const edges = [];

    for (const a of articles) {
      nodes.push({ id: a.slug, label: a.title, type: 'Article', category: a.category });
      for (const rel of a.relatedArticles || []) {
        edges.push({ source: a.slug, target: rel, relationship: 'RELATED_ARTICLE' });
      }
      for (const t of a.relatedTools || []) {
        edges.push({ source: a.slug, target: t, relationship: 'USES_TOOL' });
      }
    }

    return {
      nodesCount: nodes.length,
      edgesCount: edges.length,
      nodes,
      edges
    };
  }
}

module.exports = new KeywordGraphBuilder();
