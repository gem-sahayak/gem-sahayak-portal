'use strict';

class AgentVoting {
  tallyVotes(votes = []) {
    let yes = 0, no = 0;
    votes.forEach(v => v.approve ? yes++ : no++);
    return { yes, no, approved: yes > no };
  }
}

module.exports = new AgentVoting();
