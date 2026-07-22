'use strict';

class EpisodicMemory {
  constructor() {
    this.episodes = [];
  }

  recordEpisode(episode) {
    this.episodes.unshift({ timestamp: new Date().toISOString(), episode });
  }

  getEpisodes() {
    return this.episodes;
  }
}

module.exports = new EpisodicMemory();
