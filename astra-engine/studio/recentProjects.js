'use strict';

/**
 * Recent Projects History Manager.
 */
class RecentProjectsManager {
  constructor() {
    this.recentProjects = [];
    this.pinnedProjects = new Set();
  }

  addRecent(projectPath, name = '') {
    this.recentProjects = this.recentProjects.filter(p => p.path !== projectPath);
    this.recentProjects.unshift({
      path: projectPath,
      name: name || projectPath.split(/[/\\]/).pop(),
      lastOpened: new Date().toISOString()
    });
  }

  pinProject(projectPath) {
    this.pinnedProjects.add(projectPath);
  }

  unpinProject(projectPath) {
    this.pinnedProjects.delete(projectPath);
  }

  getRecentProjects() {
    return this.recentProjects.map(p => ({
      ...p,
      isPinned: this.pinnedProjects.has(p.path)
    }));
  }
}

module.exports = new RecentProjectsManager();
