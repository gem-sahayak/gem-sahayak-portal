const path = require('path');
const fsScanner = require('../filesystem');
const mdParser = require('../parser/markdown');
const tsParser = require('../parser/typescript');
const stateManager = require('../state');

class SystemScanner {
  async runScanner(rootDir, config) {
    const exclusions = config.exclusions || [];
    
    // Step 1: Scan filesystem
    const scanInventory = await fsScanner.scan(rootDir, exclusions);
    
    // Step 2 & 5: Populate state with parsed metadata
    stateManager.updateState((draft) => {
      // Clear filesystem map
      draft.filesystem.files.clear();
      draft.filesystem.rootPath = rootDir;

      // Populate file inventory
      for (const [key, value] of scanInventory.files.entries()) {
        draft.filesystem.files.set(key, value);
      }

      // Step 4: Parse registry.ts
      const registryPath = path.join(rootDir, 'src/content/registry.ts');
      if (draft.filesystem.files.has('src/content/registry.ts')) {
        const parsedReg = tsParser.parse(registryPath);
        draft.parsedRegistry.articles = parsedReg.articles || [];
        draft.parsedRegistry.categories = parsedReg.categories || [];
        draft.parsedRegistry.tools = parsedReg.tools || [];
        draft.parsedRegistry.faqs = parsedReg.faqs || [];
      }

      // Step 3: Scan posts/ markdown metadata content
      draft.metadataMap.clear();
      for (const [relativePath, fileObj] of draft.filesystem.files.entries()) {
        if (relativePath.startsWith('posts/') && fileObj.extension === '.md') {
          const parsedMd = mdParser.parse(fileObj.absolutePath);
          if (parsedMd) {
            draft.metadataMap.set(relativePath, parsedMd);
          }
        }
      }
    });

    return stateManager.getStateSnapshot();
  }
}

module.exports = new SystemScanner();
