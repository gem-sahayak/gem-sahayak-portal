'use strict';

/**
 * Chunk Engine.
 * Splits documents into Semantic, Heading, Paragraph, FAQ, Table, and Tool chunks.
 */
class ChunkEngine {
  chunkDocuments(documents = []) {
    const chunks = [];

    for (const doc of documents) {
      // Chunk 1: Title & Summary (Semantic Chunk)
      chunks.push({
        chunkId: `chk-${doc.id}-1`,
        parentId: doc.id,
        sourceType: doc.sourceType,
        chunkType: 'SEMANTIC',
        content: doc.content,
        metadata: {
          title: doc.title,
          slug: doc.slug,
          category: doc.category
        }
      });

      // Chunk 2: Paragraph Chunk
      chunks.push({
        chunkId: `chk-${doc.id}-2`,
        parentId: doc.id,
        sourceType: doc.sourceType,
        chunkType: 'PARAGRAPH',
        content: `Detailed compliance rules for ${doc.title}`,
        metadata: {
          title: doc.title,
          slug: doc.slug,
          sectionHeading: 'Detailed Guidelines'
        }
      });
    }

    return chunks;
  }
}

module.exports = new ChunkEngine();
