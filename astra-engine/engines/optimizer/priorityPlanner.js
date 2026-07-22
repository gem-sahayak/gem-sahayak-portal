'use strict';

/**
 * Priority Roadmap Planner Engine.
 * Categorizes suggestions into Critical, High, Medium, Low with SEO impact & difficulty estimates.
 */
class PriorityPlannerEngine {
  buildRoadmap(suggestions = []) {
    const critical = [];
    const high = [];
    const medium = [];
    const low = [];

    for (const s of suggestions) {
      const item = {
        articleSlug: s.articleSlug,
        action: s.description,
        estimatedSeoImpact: s.estimatedSeoImpact || 'HIGH',
        difficulty: s.difficulty || 'MODERATE',
        implementationTimeMinutes: s.priority === 'CRITICAL' ? 15 : (s.priority === 'HIGH' ? 30 : 45)
      };

      if (s.priority === 'CRITICAL') critical.push(item);
      else if (s.priority === 'HIGH') high.push(item);
      else if (s.priority === 'MEDIUM') medium.push(item);
      else low.push(item);
    }

    return {
      summary: {
        totalActions: suggestions.length,
        criticalCount: critical.length,
        highCount: high.length,
        mediumCount: medium.length,
        lowCount: low.length
      },
      roadmap: {
        critical,
        high,
        medium,
        low
      }
    };
  }
}

module.exports = new PriorityPlannerEngine();
