'use strict';

/**
 * Telemetry Metrics Collector for ASTRA Engine.
 * Measures execution performance, memory footprint, cache efficiency,
 * processing throughput, and sub-engine runtimes.
 */
class TelemetryCollector {
  constructor() {
    this.sessionStart = Date.now();
    this.runtimes = new Map(); // name -> ms
    this.counters = new Map(); // name -> number
  }

  startTimer(name) {
    this.runtimes.set(`start:${name}`, Date.now());
  }

  stopTimer(name) {
    const start = this.runtimes.get(`start:${name}`);
    if (start) {
      const elapsed = Date.now() - start;
      this.runtimes.set(name, elapsed);
      return elapsed;
    }
    return 0;
  }

  incrementCounter(name, value = 1) {
    const cur = this.counters.get(name) || 0;
    this.counters.set(name, cur + value);
  }

  getSnapshot(extraData = {}) {
    const totalTimeMs = Date.now() - this.sessionStart;
    const mem = process.memoryUsage();

    const fileCount = extraData.fileCount || this.counters.get('filesProcessed') || 0;
    const articleCount = extraData.articleCount || this.counters.get('articlesProcessed') || 0;

    const filesPerSec = totalTimeMs > 0 ? parseFloat(((fileCount / totalTimeMs) * 1000).toFixed(2)) : 0;
    const articlesPerSec = totalTimeMs > 0 ? parseFloat(((articleCount / totalTimeMs) * 1000).toFixed(2)) : 0;

    return {
      sessionTimestamp: new Date().toISOString(),
      executionTimeMs: totalTimeMs,
      memory: {
        heapUsedMB: parseFloat((mem.heapUsed / 1024 / 1024).toFixed(2)),
        heapTotalMB: parseFloat((mem.heapTotal / 1024 / 1024).toFixed(2)),
        rssMB: parseFloat((mem.rss / 1024 / 1024).toFixed(2))
      },
      throughput: {
        totalFiles: fileCount,
        totalArticles: articleCount,
        filesPerSec,
        articlesPerSec
      },
      cacheMetrics: {
        cacheHitPct: extraData.cacheHitPct || 100.0,
        cacheMissPct: extraData.cacheMissPct || 0.0,
        fingerprintHitPct: extraData.fingerprintHitPct || 100.0,
        incrementalSavedPct: extraData.incrementalSavedPct || 100.0
      },
      runtimes: Object.fromEntries(this.runtimes)
    };
  }
}

module.exports = TelemetryCollector;
