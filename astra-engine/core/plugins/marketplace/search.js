'use strict';

const catalogManager = require('./catalog');

class MarketplaceSearch {
  search(query = '') {
    const catalog = catalogManager.getCatalog();
    if (!query) return catalog;

    const q = query.toLowerCase();
    return catalog.filter(item =>
      item.id.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  }
}

module.exports = new MarketplaceSearch();
