'use strict';

/**
 * Knowledge Graph Core Builder & Analyzer for ASTRA Engine.
 * Constructs graph topology (nodes, directed edges, adjacency lists, in/out degrees, cluster depth).
 */
class KnowledgeGraphBuilder {
  buildGraph(parsedRegistry) {
    const articles = parsedRegistry.articles || [];
    const categories = parsedRegistry.categories || [];
    const tools = parsedRegistry.tools || [];
    const faqs = parsedRegistry.faqs || [];

    const nodes = [];
    const edges = [];

    const nodeSet = new Set();
    const inboundCount = new Map();
    const outboundCount = new Map();
    const adjacency = new Map();

    const addNode = (id, type, meta = {}) => {
      if (!nodeSet.has(id)) {
        nodeSet.add(id);
        nodes.push({ id, type, meta });
        inboundCount.set(id, 0);
        outboundCount.set(id, 0);
        adjacency.set(id, []);
      }
    };

    // 1. Add Category Pillar Nodes
    for (const cat of categories) {
      const catSlug = typeof cat === 'string' ? cat : cat.slug;
      if (catSlug) {
        addNode(catSlug, 'category', { name: cat.name || catSlug });
      }
    }

    // 2. Add Tool Nodes
    for (const tool of tools) {
      const toolSlug = typeof tool === 'string' ? tool : tool.slug;
      if (toolSlug) {
        addNode(toolSlug, 'tool', { name: tool.name || toolSlug });
      }
    }

    // 3. Add FAQ Nodes
    for (const faq of faqs) {
      const faqSlug = typeof faq === 'string' ? faq : faq.slug;
      if (faqSlug) {
        addNode(faqSlug, 'faq', { question: faq.question || faqSlug });
      }
    }

    // 4. Add Article Nodes and Edges
    for (const art of articles) {
      const artSlug = art.slug;
      if (!artSlug) continue;

      addNode(artSlug, 'article', { title: art.title, category: art.category });

      // Edge: Category -> Article (Parent -> Spoke)
      const catSlug = art.category ? art.category.toLowerCase().replace(/\s+/g, '-') : '';
      if (catSlug && nodeSet.has(catSlug)) {
        edges.push({ source: catSlug, target: artSlug, type: 'parent-child' });
        outboundCount.set(catSlug, (outboundCount.get(catSlug) || 0) + 1);
        inboundCount.set(artSlug, (inboundCount.get(artSlug) || 0) + 1);
        adjacency.get(catSlug).push(artSlug);
      }

      // Edges: Article -> Related Articles
      const relatedArticles = art.relatedArticles || art.frontmatter?.relatedArticles || [];
      if (Array.isArray(relatedArticles)) {
        for (const targetSlug of relatedArticles) {
          addNode(targetSlug, 'article');
          edges.push({ source: artSlug, target: targetSlug, type: 'related-article' });
          outboundCount.set(artSlug, (outboundCount.get(artSlug) || 0) + 1);
          inboundCount.set(targetSlug, (inboundCount.get(targetSlug) || 0) + 1);
          adjacency.get(artSlug).push(targetSlug);
        }
      }

      // Edges: Article -> Related Tools
      const relatedTools = art.relatedTools || art.frontmatter?.relatedTools || [];
      if (Array.isArray(relatedTools)) {
        for (const toolSlug of relatedTools) {
          addNode(toolSlug, 'tool');
          edges.push({ source: artSlug, target: toolSlug, type: 'uses-tool' });
          outboundCount.set(artSlug, (outboundCount.get(artSlug) || 0) + 1);
          inboundCount.set(toolSlug, (inboundCount.get(toolSlug) || 0) + 1);
          adjacency.get(artSlug).push(toolSlug);
        }
      }
    }

    // 5. Calculate maximum graph depth using O(V + E) memoized DFS
    const memoDepth = new Map();
    const calculateNodeDepth = (nodeId, visited = new Set()) => {
      if (visited.has(nodeId)) return 0;
      if (memoDepth.has(nodeId)) return memoDepth.get(nodeId);

      visited.add(nodeId);
      let maxChildDepth = 0;
      const neighbors = adjacency.get(nodeId) || [];
      for (const n of neighbors) {
        const d = calculateNodeDepth(n, visited);
        if (d > maxChildDepth) maxChildDepth = d;
      }
      visited.delete(nodeId);

      const totalDepth = 1 + maxChildDepth;
      memoDepth.set(nodeId, totalDepth);
      return totalDepth;
    };

    let maxDepth = 0;
    for (const cat of categories) {
      const catSlug = typeof cat === 'string' ? cat : cat.slug;
      if (catSlug) {
        const d = calculateNodeDepth(catSlug);
        if (d > maxDepth) maxDepth = d;
      }
    }

    return {
      nodes,
      edges,
      adjacency,
      inboundCount,
      outboundCount,
      graphMetrics: {
        totalNodes: nodes.length,
        totalEdges: edges.length,
        articleNodes: articles.length,
        categoryNodes: categories.length,
        toolNodes: tools.length,
        faqNodes: faqs.length,
        maxDepth
      }
    };
  }
}

module.exports = new KnowledgeGraphBuilder();
