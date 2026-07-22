'use strict';

class PluginTwin {
  createTwin() {
    return {
      type: 'PLUGIN_TWIN',
      loadedPlugins: 2,
      trustedCount: 2
    };
  }
}

module.exports = new PluginTwin();
