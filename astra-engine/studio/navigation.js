'use strict';

const activityBar = require('./activityBar');

/**
 * Navigation Manager.
 * Orchestrates sidebar view switching.
 */
class NavigationManager {
  navigate(viewId) {
    return activityBar.setActive(viewId);
  }

  getCurrentView() {
    return activityBar.getActive();
  }
}

module.exports = new NavigationManager();
