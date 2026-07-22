'use strict';

class ReviewPromptBuilder {
  buildArticleAuditPrompt(articleData) {
    return {
      systemInstruction: 'You are ASTRA AI Reviewer auditing government procurement & GeM portal content for EEAT, search intent, completeness, and clarity.',
      payload: {
        slug: articleData.slug,
        title: articleData.title,
        summary: articleData.summary,
        category: articleData.category,
        relatedTools: articleData.relatedTools || [],
        relatedArticles: articleData.relatedArticles || []
      }
    };
  }
}

module.exports = new ReviewPromptBuilder();
