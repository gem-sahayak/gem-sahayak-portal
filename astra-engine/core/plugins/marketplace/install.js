'use strict';

const fs = require('fs');
const path = require('path');
const catalogManager = require('./catalog');
const pluginLoader = require('../loader');
const pluginRegistry = require('../registry');

const PLUGINS_DIR = path.resolve(__dirname, '../../../plugins');

class MarketplaceInstaller {
  installPlugin(pluginId) {
    const meta = catalogManager.getPlugin(pluginId);
    if (!meta) {
      throw new Error(`Plugin "${pluginId}" not found in marketplace catalog`);
    }

    const targetFolder = path.join(PLUGINS_DIR, pluginId);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    // Write manifest and dummy index.js for catalog installation
    fs.writeFileSync(path.join(targetFolder, 'plugin.json'), JSON.stringify(meta, null, 2), 'utf8');
    const dummyCode = `'use strict';\nclass ${meta.id.replace(/-/g, '_')} {\n  async executeHook(h, c) { return { status: 'OK' }; }\n}\nmodule.exports = ${meta.id.replace(/-/g, '_')};\n`;
    fs.writeFileSync(path.join(targetFolder, 'index.js'), dummyCode, 'utf8');
    fs.writeFileSync(path.join(targetFolder, 'README.md'), `# ${meta.name}\n\n${meta.description}`, 'utf8');

    // Load installed plugin into registry
    const record = pluginLoader.loadPluginFromDir(targetFolder);
    return record;
  }

  uninstallPlugin(pluginId) {
    pluginRegistry.unregister(pluginId);
    const targetFolder = path.join(PLUGINS_DIR, pluginId);

    if (fs.existsSync(targetFolder)) {
      fs.rmSync(targetFolder, { recursive: true, force: true });
    }

    return true;
  }
}

module.exports = new MarketplaceInstaller();
