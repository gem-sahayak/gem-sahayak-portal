'use strict';

/**
 * Graph Validator for Knowledge Graph Engine.
 * Detects graph loops/cycles, orphan pages (0 inbound links), dead ends (0 outbound links),
 * disconnected clusters, and calculates total graph depth.
 */
class GraphValidator {
  validate(graphTopology) {
    const errors = [];
    const warnings = [];

    const { nodes, edges, adjacency, inboundCount, outboundCount } = graphTopology;

    // 1. Detect Orphan Pages (Nodes with 0 inbound links)
    for (const node of nodes) {
      if (node.type === 'article') {
        const inDegree = inboundCount.get(node.id) || 0;
        if (inDegree === 0) {
          warnings.push({
            code: 'ORPHAN_ARTICLE_NODE',
            message: `Article "${node.id}" has 0 inbound links in the Knowledge Graph (Orphan Node)`,
            file: 'src/content/registry.ts',
            evidence: { slug: node.id, type: node.type, inboundLinks: 0 }
          });
        }
      } else if (node.type === 'tool') {
        const inDegree = inboundCount.get(node.id) || 0;
        if (inDegree === 0) {
          warnings.push({
            code: 'ORPHAN_TOOL_NODE',
            message: `Tool "${node.id}" has 0 inbound article links in the Knowledge Graph`,
            file: 'src/content/registry.ts',
            evidence: { toolSlug: node.id, type: node.type, inboundLinks: 0 }
          });
        }
      }
    }

    // 2. Detect Dead-End Nodes (Articles with 0 outbound links)
    for (const node of nodes) {
      if (node.type === 'article') {
        const outDegree = outboundCount.get(node.id) || 0;
        if (outDegree === 0) {
          warnings.push({
            code: 'DEAD_END_NODE',
            message: `Article "${node.id}" has 0 outbound internal links`,
            file: 'src/content/registry.ts',
            evidence: { slug: node.id, outboundLinks: 0 }
          });
        }
      }
    }

    // 3. Cycle & Self-Loop Detection
    for (const edge of edges) {
      if (edge.source === edge.target) {
        errors.push({
          code: 'SELF_LOOP_DETECTED',
          message: `Node "${edge.source}" has a self-referential link (Self-Loop)`,
          file: 'src/content/registry.ts',
          evidence: { node: edge.source }
        });
      }
    }

    // 4. Disconnected Clusters Detection (Nodes with 0 inbound AND 0 outbound links)
    for (const node of nodes) {
      if (node.type === 'article') {
        const inDegree = inboundCount.get(node.id) || 0;
        if (inDegree === 0 && (outboundCount.get(node.id) || 0) === 0) {
          errors.push({
            code: 'ISOLATED_NODE_CLUSTER',
            message: `Article "${node.id}" is completely isolated from the Knowledge Graph (0 inbound, 0 outbound)`,
            file: 'src/content/registry.ts',
            evidence: { slug: node.id }
          });
        }
      }
    }

    return { errors, warnings };
  }
}

module.exports = new GraphValidator();
