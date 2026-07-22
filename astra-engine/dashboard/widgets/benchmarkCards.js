'use strict';

/**
 * Benchmark Cards Widget.
 */
class BenchmarkCardsWidget {
  renderBenchmarkSummary() {
    return {
      knowledgeRagBenchmark: '113 ms (10,000 docs scale)',
      optimizerBenchmark: '77 ms (5,000 articles scale)',
      studioBenchmark: '7 ms (100 projects scale)',
      dashboardBenchmarkTarget: '<700 ms'
    };
  }
}

module.exports = new BenchmarkCardsWidget();
