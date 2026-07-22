'use strict';

const StudioWorkspace = require('./workspace');
const layoutManager = require('./layout');
const navigationManager = require('./navigation');
const projectManager = require('./projectManager');
const reportExplorer = require('./reportExplorer');
const commandPalette = require('./commandPalette');
const activityBar = require('./activityBar');
const statusBar = require('./statusBar');
const notificationCenter = require('./notificationCenter');
const workspaceState = require('./workspaceState');
const recentProjects = require('./recentProjects');
const themeManager = require('./themeManager');
const settingsManager = require('./settingsManager');
const shortcutManager = require('./shortcutManager');

const defaultStudio = new StudioWorkspace();

module.exports = {
  studioWorkspace: defaultStudio,
  StudioWorkspace,
  layoutManager,
  navigationManager,
  projectManager,
  reportExplorer,
  commandPalette,
  activityBar,
  statusBar,
  notificationCenter,
  workspaceState,
  recentProjects,
  themeManager,
  settingsManager,
  shortcutManager
};
