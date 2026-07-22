'use strict';

const ReviewEngine = require('./reviewEngine');
const MockAiAdapter = require('./adapters/mockAdapter');
const BaseAiAdapter = require('./adapters/baseAdapter');

const defaultEngine = new ReviewEngine();

module.exports = {
  reviewEngine: defaultEngine,
  ReviewEngine,
  MockAiAdapter,
  BaseAiAdapter
};
