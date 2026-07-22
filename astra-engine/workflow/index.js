'use strict';

const WorkflowEngine = require('./workflowEngine');
const workflowRunner = require('./workflowRunner');
const workflowScheduler = require('./workflowScheduler');
const workflowHistory = require('./workflowHistory');
const workflowRegistry = require('./workflowRegistry');
const workflowValidator = require('./workflowValidator');
const WorkflowState = require('./workflowState');
const WorkflowContext = require('./workflowContext');
const workflowTemplates = require('./workflowTemplates');
const workflowMetrics = require('./workflowMetrics');

const defaultEngine = new WorkflowEngine();

module.exports = {
  workflowEngine: defaultEngine,
  WorkflowEngine,
  workflowRunner,
  workflowScheduler,
  workflowHistory,
  workflowRegistry,
  workflowValidator,
  WorkflowState,
  WorkflowContext,
  workflowTemplates,
  workflowMetrics
};
