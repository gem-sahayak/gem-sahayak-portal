'use strict';

/**
 * CompetitionMap — Maps competitive landscape using Herfindahl-Hirschman Index (HHI).
 * HHI = sum of squared market shares. Range: 0–10000.
 * < 1500 = LOW concentration, 1500–2500 = MODERATE, > 2500 = HIGH.
 */
class CompetitionMap {
  mapCompetition(competitors = []) {
    if (competitors.length === 0) {
      return { totalCompetitors: 0, herfindahlIndex: 0, concentrationLevel: 'LOW', topPlayer: null };
    }

    const herfindahlIndex = Math.round(
      competitors.reduce((sum, c) => sum + Math.pow(c.marketShare || 0, 2), 0)
    );

    let concentrationLevel;
    if (herfindahlIndex > 2500) concentrationLevel = 'HIGH';
    else if (herfindahlIndex > 1500) concentrationLevel = 'MODERATE';
    else concentrationLevel = 'LOW';

    const sorted = [...competitors].sort((a, b) => (b.marketShare || 0) - (a.marketShare || 0));
    const topPlayer = sorted[0] || null;

    return {
      totalCompetitors: competitors.length,
      herfindahlIndex,
      concentrationLevel,
      topPlayer: topPlayer ? { name: topPlayer.name, marketShare: topPlayer.marketShare, rating: topPlayer.rating } : null
    };
  }
}

module.exports = new CompetitionMap();
