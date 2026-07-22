'use strict';

const activityBar = require('./activityBar');
const statusBar = require('./statusBar');
const themeManager = require('./themeManager');

/**
 * Layout Manager.
 * Computes Studio grid/flex visual layout payload.
 */
class LayoutManager {
  renderLayout(activeProjectName = 'Gem-Sahayak') {
    const tokens = themeManager.getThemeTokens();
    const status = statusBar.renderStatus(activeProjectName);

    return {
      theme: themeManager.getTheme(),
      themeTokens: tokens,
      activityBar: {
        activeItem: activityBar.getActive(),
        items: activityBar.items
      },
      mainPanel: {
        activeView: activityBar.getActive()
      },
      statusBar: status
    };
  }
}

module.exports = new LayoutManager();
