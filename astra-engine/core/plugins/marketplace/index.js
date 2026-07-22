'use strict';

const catalog = require('./catalog');
const search = require('./search');
const installer = require('./install');

module.exports = {
  marketplaceCatalog: catalog,
  marketplaceSearch: search,
  marketplaceInstaller: installer
};
