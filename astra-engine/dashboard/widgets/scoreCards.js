'use strict';

/**
 * Score Cards Widget.
 */
class ScoreCardsWidget {
  renderCard(title, score, badge = 'PASS') {
    return {
      title,
      score,
      badge,
      status: score >= 80 ? 'HEALTHY' : 'NEEDS_ATTENTION'
    };
  }
}

module.exports = new ScoreCardsWidget();
