'use strict';

const fs = require('fs');
const path = require('path');
const validator = require('./validator');
const { validateReportPath } = require('../../guards/pathGuard');

class PluginPackager {
  /**
   * Bundles a plugin directory into a JSON-based .apkg package archive.
   */
  packagePlugin(pluginDir, outputApkgPath) {
    const valRes = validator.validatePackageFolder(pluginDir);
    if (!valRes.valid) {
      throw new Error(`Cannot package plugin in ${pluginDir}: ${valRes.errors.join(', ')}`);
    }

    const manifest = JSON.parse(fs.readFileSync(path.join(pluginDir, 'plugin.json'), 'utf8'));
    const indexContent = fs.readFileSync(path.join(pluginDir, 'index.js'), 'utf8');
    const readmeContent = fs.existsSync(path.join(pluginDir, 'README.md'))
      ? fs.readFileSync(path.join(pluginDir, 'README.md'), 'utf8')
      : '';

    const checksum = validator.calculateChecksum(path.join(pluginDir, 'index.js'));

    const apkgData = {
      formatVersion: '1.0.0',
      packagedAt: new Date().toISOString(),
      manifest,
      files: {
        'index.js': indexContent,
        'README.md': readmeContent
      },
      checksum
    };

    const targetPath = validateReportPath(outputApkgPath);
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(targetPath, JSON.stringify(apkgData, null, 2), 'utf8');
    return { targetPath, checksum };
  }

  /**
   * Unpacks an .apkg file into a target directory inside plugins/.
   */
  unpackPlugin(apkgPath, destDir) {
    if (!fs.existsSync(apkgPath)) {
      throw new Error(`Package file not found: ${apkgPath}`);
    }

    const raw = fs.readFileSync(apkgPath, 'utf8');
    const apkgData = JSON.parse(raw);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    fs.writeFileSync(path.join(destDir, 'plugin.json'), JSON.stringify(apkgData.manifest, null, 2), 'utf8');
    for (const [filename, content] of Object.entries(apkgData.files || {})) {
      fs.writeFileSync(path.join(destDir, filename), content, 'utf8');
    }

    return apkgData.manifest;
  }
}

module.exports = new PluginPackager();
