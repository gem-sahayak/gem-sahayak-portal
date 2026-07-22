'use strict';

/**
 * Search Intent, Content Type, and Audience Classifier.
 */
class IntentAnalyzer {
  classifyArticle(article) {
    const text = `${article.title || ''} ${article.summary || ''} ${article.slug || ''}`.toLowerCase();

    // Intent classification
    let searchIntent = 'Informational';
    if (text.includes('how to') || text.includes('kaise') || text.includes('guide')) searchIntent = 'Educational';
    else if (text.includes('rules') || text.includes('gfr') || text.includes('compliance')) searchIntent = 'Government Procurement';
    else if (text.includes('calculator') || text.includes('tool') || text.includes('generator')) searchIntent = 'Tool';
    else if (text.includes('vs') || text.includes('difference')) searchIntent = 'Comparison';

    // Content Type classification
    let contentType = 'Guide';
    if (text.includes('vs') || text.includes('difference')) contentType = 'Comparison';
    else if (text.includes('rules') || text.includes('limit')) contentType = 'Policy';
    else if (text.includes('calculator') || text.includes('finder')) contentType = 'Tool';
    else if (text.includes('faq')) contentType = 'FAQ';

    // Target Audience
    let audience = 'MSME';
    if (text.includes('buyer') || text.includes('procurement')) audience = 'Government Buyer';
    else if (text.includes('oem') || text.includes('brand')) audience = 'Enterprise';

    return {
      slug: article.slug,
      searchIntent,
      contentType,
      audience
    };
  }
}

module.exports = new IntentAnalyzer();
