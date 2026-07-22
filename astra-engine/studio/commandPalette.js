'use strict';

/**
 * Command Palette Engine.
 * Quick command launcher (Search Commands, Run Engine, Open Report).
 */
class CommandPalette {
  constructor() {
    this.commands = [
      { id: 'cmd.scan', name: 'Run Repository Scan', command: 'node cli.js scan' },
      { id: 'cmd.seo', name: 'Run SEO Engine Audit', command: 'node cli.js seo' },
      { id: 'cmd.graph', name: 'Run Knowledge Graph Audit', command: 'node cli.js graph' },
      { id: 'cmd.review', name: 'Run AI Review Engine Audit', command: 'node cli.js review' },
      { id: 'cmd.semantic', name: 'Run Semantic SEO Intelligence Engine', command: 'node cli.js semantic' },
      { id: 'cmd.optimize', name: 'Run Content Optimization Platform', command: 'node cli.js optimize' },
      { id: 'cmd.knowledge', name: 'Run Knowledge RAG Pipeline', command: 'node cli.js knowledge' },
      { id: 'cmd.doctor', name: 'Run Astra Doctor Diagnostics', command: 'node cli.js doctor' }
    ];
  }

  searchCommands(query = '') {
    if (!query) return this.commands;
    const q = query.toLowerCase();
    return this.commands.filter(c => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q));
  }
}

module.exports = new CommandPalette();
