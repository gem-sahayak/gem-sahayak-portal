'use strict';

/**
 * Studio Keyboard Shortcut Manager.
 * Registers global hotkeys (Ctrl+P, Ctrl+Shift+R, Ctrl+Shift+G, etc.).
 */
class ShortcutManager {
  constructor() {
    this.shortcuts = new Map();
    this.registerDefaults();
  }

  registerDefaults() {
    this.register('Ctrl+P', 'Command Palette', 'openCommandPalette');
    this.register('Ctrl+Shift+R', 'Open Reports Explorer', 'openReportsExplorer');
    this.register('Ctrl+Shift+G', 'Open Knowledge Graph Explorer', 'openGraphExplorer');
    this.register('Ctrl+Shift+O', 'Open Content Optimizer', 'openOptimizer');
    this.register('Ctrl+Shift+K', 'Open Knowledge Intelligence RAG', 'openKnowledge');
  }

  register(shortcut, description, actionId) {
    this.shortcuts.set(shortcut, { description, actionId });
  }

  getShortcuts() {
    const list = [];
    for (const [key, value] of this.shortcuts.entries()) {
      list.push({ shortcut: key, ...value });
    }
    return list;
  }
}

module.exports = new ShortcutManager();
