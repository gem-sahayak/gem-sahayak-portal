'use strict';

/**
 * FAQ Generator Engine.
 * Groups FAQs into Beginner, Intermediate, Advanced, Transactional, Informational.
 */
class FaqGeneratorEngine {
  generateFaqs(article) {
    const slug = article.slug || '';

    return [
      {
        articleSlug: slug,
        question: `GeM Portal par ${slug.replace(/-/g, ' ')} setup fees kitni lagti hai?`,
        category: 'Beginner',
        suggestedAnswerOutline: 'GeM portal seller registration 100% free hoti hai. Government koi registration fee charge nahi karti.'
      },
      {
        articleSlug: slug,
        question: 'Kya MSME Certificate linking se EMD exemption milti hai?',
        category: 'Transactional',
        suggestedAnswerOutline: 'Haan, Udyam registered MSME sellers ko EMD exemption and bid turnover relaxation milti hai.'
      },
      {
        articleSlug: slug,
        question: 'EMD refund delayed hone par kahan complain karein?',
        category: 'Advanced',
        suggestedAnswerOutline: 'Buyer organization support desk aur GeM Incident Management portal par ticket raise karein.'
      }
    ];
  }
}

module.exports = new FaqGeneratorEngine();
