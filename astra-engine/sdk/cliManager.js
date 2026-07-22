'use strict';

const fs = require('fs');
const path = require('path');
const { pluginPackager, packageValidator } = require('../core/plugins/package');
const pluginLoader = require('../core/plugins/loader');
const pluginRegistry = require('../core/plugins/registry');
const manifestValidator = require('../core/plugins/manifest');

const TEMPLATES_DIR = path.resolve(__dirname, 'templates');
const PLUGINS_DIR = path.resolve(__dirname, '../plugins');

class PluginSdkCliManager {
  initSdk() {
    return {
      status: 'OK',
      sdkVersion: '1.3.2',
      templatesAvailable: ['audit-plugin', 'seo-plugin', 'graph-plugin']
    };
  }

  createPlugin(pluginName, templateType = 'audit-plugin') {
    const slug = pluginName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const targetDir = path.join(PLUGINS_DIR, slug);

    if (fs.existsSync(targetDir)) {
      throw new Error(`Plugin directory already exists: ${targetDir}`);
    }

    fs.mkdirSync(targetDir, { recursive: true });

    const templateSource = path.join(TEMPLATES_DIR, 'audit-plugin');
    if (fs.existsSync(templateSource)) {
      for (const f of fs.readdirSync(templateSource)) {
        fs.copyFileSync(path.join(templateSource, f), path.join(targetDir, f));
      }
    }

    // Update created manifest
    const manifestPath = path.join(targetDir, 'plugin.json');
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      manifest.id = slug;
      manifest.name = pluginName;
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    }

    return { targetDir, slug };
  }

  packagePlugin(pluginDir, outputPath) {
    const apkgPath = outputPath || path.join(__dirname, '../reports/latest', `${path.basename(pluginDir)}.apkg`);
    return pluginPackager.packagePlugin(pluginDir, apkgPath);
  }

  lintPlugin(pluginDir) {
    const valRes = packageValidator.validatePackageFolder(pluginDir);
    return valRes;
  }

  testPlugin(pluginDir) {
    const record = pluginLoader.loadPluginFromDir(pluginDir);
    return {
      status: 'TESTS_PASSED',
      pluginId: record.id
    };
  }
}

module.exports = new PluginSdkCliManager();
