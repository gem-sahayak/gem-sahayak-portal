'use strict';

const projectTwin = require('./projectTwin');
const workflowTwin = require('./workflowTwin');
const knowledgeTwin = require('./knowledgeTwin');
const entityTwin = require('./entityTwin');
const pluginTwin = require('./pluginTwin');
const systemTwin = require('./systemTwin');
const workspaceTwin = require('./workspaceTwin');
const dependencyTwin = require('./dependencyTwin');
const twinRegistry = require('./twinRegistry');
const twinMetrics = require('./twinMetrics');

module.exports = {
  projectTwin,
  workflowTwin,
  knowledgeTwin,
  entityTwin,
  pluginTwin,
  systemTwin,
  workspaceTwin,
  dependencyTwin,
  twinRegistry,
  twinMetrics
};
