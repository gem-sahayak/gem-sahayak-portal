'use strict';

/**
 * Local Catalog of Approved Enterprise Plugins.
 */
const DEFAULT_CATALOG = [
  {
    id: 'official-seo-optimizer',
    name: 'Official SEO Optimizer Plugin',
    version: '1.2.0',
    engineVersion: '1.3.2',
    author: 'ASTRA Core Team',
    publisher: 'ASTRA Core Team',
    description: 'Advanced read-only SEO keyword density and canonical hierarchy reviewer',
    trustLevel: 'OFFICIAL',
    permissions: ['READ_STATE', 'READ_REPORTS'],
    hooks: ['afterScan', 'afterReport']
  },
  {
    id: 'official-graph-verifier',
    name: 'Official Knowledge Graph Topology Verifier',
    version: '1.1.0',
    engineVersion: '1.3.2',
    author: 'ASTRA Core Team',
    publisher: 'ASTRA Core Team',
    description: 'Validates hub & spoke links and detects orphan nodes',
    trustLevel: 'OFFICIAL',
    permissions: ['READ_GRAPH'],
    hooks: ['afterGraph']
  },
  {
    id: 'community-markdown-lint',
    name: 'Community Markdown Formatter & Linter',
    version: '1.0.0',
    engineVersion: '1.3.2',
    author: 'Dev Community',
    publisher: 'Open Source Guild',
    description: 'Inspects markdown heading depth and line length recommendations',
    trustLevel: 'COMMUNITY',
    permissions: ['READ_STATE'],
    hooks: ['afterScan']
  }
];

class MarketplaceCatalog {
  constructor() {
    this.catalog = new Map(DEFAULT_CATALOG.map(p => [p.id, p]));
  }

  getCatalog() {
    return Array.from(this.catalog.values());
  }

  getPlugin(id) {
    return this.catalog.get(id) || null;
  }
}

module.exports = new MarketplaceCatalog();
