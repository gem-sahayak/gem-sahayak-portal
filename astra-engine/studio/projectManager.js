'use strict';

const recentProjects = require('./recentProjects');

/**
 * Studio Project Manager.
 * Handles Project Open, Close, Recent, and Favorites.
 */
class ProjectManager {
  constructor() {
    this.activeProject = null;
  }

  openProject(projectPath, projectName) {
    this.activeProject = {
      path: projectPath,
      name: projectName || projectPath.split(/[/\\]/).pop(),
      openedAt: new Date().toISOString()
    };
    recentProjects.addRecent(projectPath, this.activeProject.name);
    return this.activeProject;
  }

  closeProject() {
    this.activeProject = null;
  }

  getActiveProject() {
    return this.activeProject;
  }
}

module.exports = new ProjectManager();
