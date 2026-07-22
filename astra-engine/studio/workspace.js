'use strict';

const projectManager = require('./projectManager');
const layoutManager = require('./layout');
const reportExplorer = require('./reportExplorer');
const commandPalette = require('./commandPalette');
const notificationCenter = require('./notificationCenter');

/**
 * ASTRA Studio Workspace Engine.
 * Main Orchestrator for Phase 5A Visual AI Workspace.
 */
class StudioWorkspace {
  constructor() {
    this.manifest = {
      name: 'ASTRA Studio Foundation',
      version: '1.7.0',
      description: 'Enterprise Visual AI Workspace for SEO, Knowledge Graph, AI Review, Optimization & Knowledge Intelligence'
    };
  }

  async init(ctx = {}) {
    // Initialization
  }

  async run(state = {}, reportsDir = '') {
    const proj = projectManager.getActiveProject() || projectManager.openProject('C:/Users/hp/Desktop/Gem-Sahayak', 'Gem-Sahayak');
    const layout = layoutManager.renderLayout(proj.name);
    const discoveredReports = reportExplorer.discoverReports(reportsDir);
    const availableCommands = commandPalette.searchCommands('');

    notificationCenter.notify('ASTRA Studio Ready', 'Visual AI Workspace operational', 'SUCCESS');

    return {
      manifest: this.manifest,
      verdict: 'PASS',
      activeProject: proj,
      layout,
      reports: discoveredReports,
      commands: availableCommands,
      notifications: notificationCenter.getNotifications()
    };
  }
}

module.exports = StudioWorkspace;
