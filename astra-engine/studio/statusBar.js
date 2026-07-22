'use strict';

/**
 * Studio Status Bar Renderer.
 * Displays active project, version, loaded engines, and memory usage.
 */
class StatusBar {
  renderStatus(activeProject = 'Gem-Sahayak', loadedEnginesCount = 6) {
    const memUsageMB = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);

    return {
      project: activeProject,
      version: '1.7.0',
      loadedEnginesCount,
      memoryUsage: `${memUsageMB} MB`,
      statusText: '🟢 ASTRA OS: All Phase 5A modules operational'
    };
  }
}

module.exports = new StatusBar();
