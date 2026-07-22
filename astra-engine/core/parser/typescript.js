const fs = require('fs');

class TypescriptParser {
  /**
   * Extract block of text inside matched brackets { } or [ ].
   */
  extractBlock(content, startIndex, openChar, closeChar) {
    let bracketCount = 0;
    let insideString = false;
    let stringChar = '';
    let endIndex = -1;

    for (let i = startIndex; i < content.length; i++) {
      const char = content[i];

      // Handle string quote toggling to ignore inside braces
      if ((char === "'" || char === '"' || char === '`') && content[i - 1] !== '\\') {
        if (!insideString) {
          insideString = true;
          stringChar = char;
        } else if (char === stringChar) {
          insideString = false;
        }
      }

      if (!insideString) {
        if (char === openChar) {
          bracketCount++;
        } else if (char === closeChar) {
          bracketCount--;
          if (bracketCount === 0) {
            endIndex = i;
            break;
          }
        }
      }
    }

    if (endIndex !== -1) {
      return content.slice(startIndex, endIndex + 1);
    }
    return '';
  }

  parseObjectLit(content) {
    try {
      const cleanJs = content
        .replace(/export\s+const\s+\w+(\s*:\s*[^=]+)?\s*=/g, '') // remove exports
        .replace(/export\s+interface\s+\w+\s*\{[\s\S]*?\}/g, '') // remove interfaces
        .replace(/:\s*RegistryCategory|:\s*RegistryTool|:\s*RegistryFAQ|:\s*RegistryArticle\[\]/g, '') // remove type tags
        .trim();
      
      const fn = new Function(`return (${cleanJs});`);
      return fn();
    } catch (e) {
      return this.regexTokenize(content);
    }
  }

  regexTokenize(content) {
    const registry = {
      articles: [],
      categories: [],
      tools: [],
      faqs: []
    };

    const slugMatches = content.matchAll(/slug\s*:\s*['"](.*?)['"]/g);
    const slugs = Array.from(slugMatches).map(m => m[1]);
    const uniqueSlugs = [...new Set(slugs)];
    uniqueSlugs.forEach(slug => {
      registry.articles.push({ slug });
    });

    return registry;
  }

  parse(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      // Helper to find the block for a constant starting after the assignment symbol '='
      const findConstantBlock = (varName, openChar, closeChar) => {
        const varIdx = content.indexOf(varName);
        if (varIdx === -1) return '';
        
        // Find assignment '=' after variable identifier
        const equalsIdx = content.indexOf('=', varIdx);
        if (equalsIdx === -1) return '';
        
        // Find the opening bracket starting after '='
        const startBracketIdx = content.indexOf(openChar, equalsIdx);
        if (startBracketIdx === -1) return '';
        
        return this.extractBlock(content, startBracketIdx, openChar, closeChar);
      };

      const categoriesBlock = findConstantBlock('REGISTRY_CATEGORIES', '{', '}');
      const toolsBlock = findConstantBlock('REGISTRY_TOOLS', '{', '}');
      const faqsBlock = findConstantBlock('REGISTRY_FAQS', '{', '}');
      const articlesBlock = findConstantBlock('REGISTRY_ARTICLES', '[', ']');

      const parsed = {
        categories: categoriesBlock ? this.parseObjectLit(categoriesBlock) : {},
        tools: toolsBlock ? this.parseObjectLit(toolsBlock) : {},
        faqs: faqsBlock ? this.parseObjectLit(faqsBlock) : {},
        articles: articlesBlock ? this.parseObjectLit(articlesBlock) : []
      };

      return {
        categories: Object.values(parsed.categories || {}),
        tools: Object.values(parsed.tools || {}),
        faqs: Object.values(parsed.faqs || {}),
        articles: Array.isArray(parsed.articles) ? parsed.articles : []
      };
    } catch (e) {
      console.warn(`[TS Parser Error] Failed to parse ${filePath}: ${e.message}`);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        return this.regexTokenize(content);
      } catch (innerErr) {
        return { categories: [], tools: [], faqs: [], articles: [] };
      }
    }
  }
}

module.exports = new TypescriptParser();
