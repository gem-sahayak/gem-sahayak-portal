'use strict';

const fs = require('fs');

/**
 * TypeScript Registry Parser — PURE LEXICAL TOKENIZER
 * 
 * Rule #0: NEVER executes production code.
 * Allowed: regex, brace matching, string extraction.
 * Forbidden: eval(), new Function(), vm, dynamic imports.
 */
class TypescriptParser {

  /**
   * Extract block of text inside matched brackets { } or [ ].
   * Safe brace-matching with string awareness.
   */
  extractBlock(content, startIndex, openChar, closeChar) {
    let bracketCount = 0;
    let insideString = false;
    let stringChar = '';
    let endIndex = -1;

    for (let i = startIndex; i < content.length; i++) {
      const char = content[i];

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

  /**
   * Extract individual object blocks from a container.
   * Handles both Record<string, T> ({ key: { ... } }) and Array ([ { ... } ]).
   */
  extractNestedObjects(block) {
    const objects = [];
    const trimmed = block.trim();
    const isArray = trimmed.startsWith('[');
    const targetDepth = isArray ? 1 : 2;

    let braceDepth = 0;
    let inString = false;
    let stringChar = '';
    let objStart = -1;

    for (let i = 0; i < block.length; i++) {
      const ch = block[i];

      // String detection
      if ((ch === '"' || ch === "'" || ch === '`') && (i === 0 || block[i - 1] !== '\\')) {
        if (!inString) {
          inString = true;
          stringChar = ch;
        } else if (ch === stringChar) {
          inString = false;
        }
        continue;
      }
      if (inString) continue;

      if (ch === '{') {
        braceDepth++;
        if (braceDepth === targetDepth) {
          objStart = i;
        }
      } else if (ch === '}') {
        if (braceDepth === targetDepth && objStart !== -1) {
          objects.push(block.slice(objStart, i + 1));
          objStart = -1;
        }
        braceDepth--;
      }
    }

    return objects;
  }

  /**
   * Tokenize key-value pairs from a single object string.
   * Extracts string fields and string-array fields using regex only.
   * Never executes any code.
   */
  tokenizeObjectFields(objStr) {
    const result = {};

    // 1. Extract simple string fields: key: "value" or key: 'value'
    //    Uses non-greedy match with escaped quote awareness.
    const stringFieldRegex = /(\w+)\s*:\s*"((?:[^"\\]|\\.)*)"/g;
    let match;
    while ((match = stringFieldRegex.exec(objStr)) !== null) {
      const key = match[1];
      // Only set if not already captured (first occurrence wins)
      if (!(key in result)) {
        result[key] = match[2].replace(/\\"/g, '"').replace(/\\'/g, "'");
      }
    }

    // Also match single-quoted values
    const singleQuoteRegex = /(\w+)\s*:\s*'((?:[^'\\]|\\.)*)'/g;
    while ((match = singleQuoteRegex.exec(objStr)) !== null) {
      const key = match[1];
      if (!(key in result)) {
        result[key] = match[2].replace(/\\'/g, "'").replace(/\\"/g, '"');
      }
    }

    // 2. Extract string array fields using safe bracket matching.
    //    Finds key: [...] patterns and extracts string items from within.
    const arrayKeyRegex = /(\w+)\s*:\s*\[/g;
    while ((match = arrayKeyRegex.exec(objStr)) !== null) {
      const key = match[1];
      if (key in result) continue; // already captured as string

      const arrStartIdx = objStr.indexOf('[', match.index + key.length);
      if (arrStartIdx === -1) continue;

      const arrBlock = this.extractBlock(objStr, arrStartIdx, '[', ']');
      if (!arrBlock) continue;

      const innerContent = arrBlock.slice(1, -1).trim();

      // Check if array contains objects (nested) or simple strings
      if (innerContent.includes('{')) {
        // Nested object array (e.g., faqs, useCases with objects)
        // Extract sub-objects and tokenize each
        const subObjects = this.extractNestedObjects(arrBlock);
        result[key] = subObjects.map(so => this.tokenizeObjectFields(so));
      } else {
        // Simple string array
        const items = [];
        const itemRegex = /["']((?:[^"'\\]|\\.)*)["']/g;
        let im;
        while ((im = itemRegex.exec(innerContent)) !== null) {
          items.push(im[1]);
        }
        result[key] = items;
      }
    }

    return result;
  }

  /**
   * Tokenize an entire block into an array of parsed objects.
   * This is the safe replacement for the removed parseObjectLit/new Function() method.
   */
  tokenizeBlock(block) {
    if (!block) return [];
    const objects = this.extractNestedObjects(block);
    return objects.map(obj => this.tokenizeObjectFields(obj));
  }

  /**
   * Main parse entry point.
   * Reads the file as raw text, extracts constant blocks by name,
   * then tokenizes each block into structured data.
   *
   * NEVER requires, imports, or executes the target file.
   */
  parse(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      const findConstantBlock = (varName, openChar, closeChar) => {
        const varIdx = content.indexOf(varName);
        if (varIdx === -1) return '';

        const equalsIdx = content.indexOf('=', varIdx);
        if (equalsIdx === -1) return '';

        const startBracketIdx = content.indexOf(openChar, equalsIdx);
        if (startBracketIdx === -1) return '';

        return this.extractBlock(content, startBracketIdx, openChar, closeChar);
      };

      const categoriesBlock = findConstantBlock('REGISTRY_CATEGORIES', '{', '}');
      const toolsBlock = findConstantBlock('REGISTRY_TOOLS', '{', '}');
      const faqsBlock = findConstantBlock('REGISTRY_FAQS', '{', '}');
      const articlesBlock = findConstantBlock('REGISTRY_ARTICLES', '[', ']');

      return {
        categories: this.tokenizeBlock(categoriesBlock),
        tools: this.tokenizeBlock(toolsBlock),
        faqs: this.tokenizeBlock(faqsBlock),
        articles: this.tokenizeBlock(articlesBlock)
      };
    } catch (e) {
      console.warn(`[TS Parser Error] Failed to parse ${filePath}: ${e.message}`);
      return { categories: [], tools: [], faqs: [], articles: [] };
    }
  }
}

module.exports = new TypescriptParser();
