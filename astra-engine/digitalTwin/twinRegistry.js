'use strict';

const projectTwin = require('./projectTwin');
const workflowTwin = require('./workflowTwin');
const knowledgeTwin = require('./knowledgeTwin');
const entityTwin = require('./entityTwin');
const pluginTwin = require('./pluginTwin');
const systemTwin = require('./systemTwin');
const workspaceTwin = require('./workspaceTwin');
const dependencyTwin = require('./dependencyTwin');
const twinMetrics = require('./twinMetrics');

class TwinRegistry {
  generateMasterTwin(state = {}) {
    twinMetrics.recordSync();
    return {
      timestamp: new Date().toISOString(),
      project: projectTwin.createTwin(state),
      workflow: workflowTwin.createTwin(),
      knowledge: knowledgeTwin.createTwin(),
      entity: entityTwin.createTwin(),
      plugin: pluginTwin.createTwin(),
      system: systemTwin.createTwin(),
      workspace: workspaceTwin.createTwin(),
      dependency: dependencyTwin.createTwin()
    };
  }
}

module.exports = new TwinRegistry();
