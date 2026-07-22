'use strict';

/**
 * Activity Bar Item Switcher.
 */
class ActivityBar {
  constructor() {
    this.activeItem = 'explorer';
    this.items = [
      { id: 'explorer', name: 'Explorer', icon: 'folder' },
      { id: 'reports', name: 'Reports', icon: 'file-text' },
      { id: 'knowledge', name: 'Knowledge RAG', icon: 'cpu' },
      { id: 'graph', name: 'Knowledge Graph', icon: 'git-merge' },
      { id: 'review', name: 'AI Review', icon: 'shield-check' },
      { id: 'semantic', name: 'Semantic SEO', icon: 'globe' },
      { id: 'optimizer', name: 'Content Optimizer', icon: 'trending-up' },
      { id: 'plugins', name: 'Plugins', icon: 'box' },
      { id: 'settings', name: 'Settings', icon: 'settings' }
    ];
  }

  setActive(itemId) {
    if (this.items.some(i => i.id === itemId)) {
      this.activeItem = itemId;
      return true;
    }
    return false;
  }

  getActive() {
    return this.activeItem;
  }
}

module.exports = new ActivityBar();
