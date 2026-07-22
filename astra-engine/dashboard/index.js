'use strict';

const DashboardEngine = require('./dashboardEngine');
const overviewDashboard = require('./overviewDashboard');
const seoDashboard = require('./seoDashboard');
const reviewDashboard = require('./reviewDashboard');
const semanticDashboard = require('./semanticDashboard');
const optimizerDashboard = require('./optimizerDashboard');
const knowledgeDashboard = require('./knowledgeDashboard');
const healthDashboard = require('./healthDashboard');
const performanceDashboard = require('./performanceDashboard');
const telemetryDashboard = require('./telemetryDashboard');

const defaultDashboard = new DashboardEngine();

module.exports = {
  dashboardEngine: defaultDashboard,
  DashboardEngine,
  overviewDashboard,
  seoDashboard,
  reviewDashboard,
  semanticDashboard,
  optimizerDashboard,
  knowledgeDashboard,
  healthDashboard,
  performanceDashboard,
  telemetryDashboard
};
