function simulateGame(teamA, teamB) {
  const rankDifference = teamA.FIBARanking - teamB.FIBARanking;
  const probabilityTeamA = 1 / (1 + Math.pow(10, -rankDifference / 400));

  const randomValue = Math.random();
  const winner = randomValue < probabilityTeamA ? teamA : teamB;
  const loser = winner === teamA ? teamB : teamA;

  const pointDifference = Math.floor(Math.random() * 20) + 5;
  const winnerScore = 80 + Math.floor(Math.random() * 20);
  const loserScore = winnerScore - pointDifference;

  winner.Points = (winner.Points || 0) + 2;
  loser.Points = (loser.Points || 0) + 1;

  return {
    winner: {
      Team: winner.Team,
      Score: winnerScore,
    },
    loser: {
      Team: loser.Team,
      Score: loserScore,
    },
  };
}

function simulateGroupStage(groupsData) {
  const results = {};

  for (const groupName in groupsData) {
    const group = groupsData[groupName];
    results[groupName] = [];

    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        const matchResult = simulateGame(group[i], group[j]);
        results[groupName].push(matchResult);
      }
    }
  }

  return results;
}

module.exports = {
  simulateGroupStage,
};
