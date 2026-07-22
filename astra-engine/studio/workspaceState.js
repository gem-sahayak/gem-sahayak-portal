'use strict';

/**
 * Workspace State Persistence Manager.
 * Remembers open tabs, selected reports, active view, expanded folders.
 */
class WorkspaceState {
  constructor() {
    this.activeTab = 'explorer';
    this.openTabs = ['explorer', 'reports'];
    this.selectedReport = 'reports/latest/report.json';
    this.expandedFolders = ['reports', 'reports/latest'];
  }

  getState() {
    return {
      activeTab: this.activeTab,
      openTabs: this.openTabs,
      selectedReport: this.selectedReport,
      expandedFolders: this.expandedFolders
    };
  }

  setActiveTab(tabId) {
    this.activeTab = tabId;
    if (!this.openTabs.includes(tabId)) {
      this.openTabs.push(tabId);
    }
  }

  closeTab(tabId) {
    this.openTabs = this.openTabs.filter(t => t !== tabId);
    if (this.activeTab === tabId) {
      this.activeTab = this.openTabs[0] || 'explorer';
    }
  }
}

module.exports = new WorkspaceState();
