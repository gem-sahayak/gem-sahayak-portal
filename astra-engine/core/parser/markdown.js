const fs = require('fs');

class MarkdownParser {
  /**
   * Parse frontmatter and basic details of a markdown file.
   * Safe read-only execution logic.
   */
  parse(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
      const match = content.match(frontmatterRegex);
      
      const result = {
        frontmatter: {},
        title: '',
        description: '',
        slug: '',
        category: '',
        date: '',
        tags: [],
        readingTime: '',
        canonical: '',
        schema: null,
        headings: [],
        contentLength: content.length
      };

      if (match) {
        const frontmatterText = match[1];
        const lines = frontmatterText.split('\n');
        
        for (const line of lines) {
          const colonIdx = line.indexOf(':');
          if (colonIdx !== -1) {
            const key = line.slice(0, colonIdx).trim().replace(/^['"]|['"]$/g, '');
            let valueText = line.slice(colonIdx + 1).trim();
            
            // Remove outer quotes if present
            if ((valueText.startsWith('"') && valueText.endsWith('"')) || 
                (valueText.startsWith("'") && valueText.endsWith("'"))) {
              valueText = valueText.slice(1, -1);
            }

            // Simple parser for values
            let value = valueText;
            if (valueText.startsWith('[') && valueText.endsWith(']')) {
              // Parse array
              value = valueText.slice(1, -1).split(',').map(item => item.trim().replace(/^['"]|['"]$/g, ''));
            } else if (valueText.toLowerCase() === 'true') {
              value = true;
            } else if (valueText.toLowerCase() === 'false') {
              value = false;
            }

            result.frontmatter[key] = value;
          }
        }

        // Map standard fields from frontmatter
        const path = require('path');
        result.title = result.frontmatter.title || '';
        result.description = result.frontmatter.summary || result.frontmatter.description || '';
        result.slug = result.frontmatter.slug || path.basename(filePath, '.md');
        result.category = result.frontmatter.category || '';
        result.date = result.frontmatter.date || '';
        result.tags = result.frontmatter.tags || [];
        result.readingTime = result.frontmatter.readingTime || '';
        result.canonical = result.frontmatter.canonical || '';
      }

      // Heading extraction
      const lines = content.split('\n');
      for (const line of lines) {
        if (line.startsWith('#')) {
          const matchHeading = line.match(/^(#{1,6})\s+(.*)$/);
          if (matchHeading) {
            result.headings.push({
              level: matchHeading[1].length,
              text: matchHeading[2].trim()
            });
          }
        }
      }

      // Ensure slug always falls back to the file base name if empty
      const path = require('path');
      if (!result.slug) {
        result.slug = path.basename(filePath, '.md');
      }

      return result;
    } catch (e) {
      console.warn(`[Markdown Parser Error] Failed to parse ${filePath}: ${e.message}`);
      return null;
    }
  }
}

module.exports = new MarkdownParser();
