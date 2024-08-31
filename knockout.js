function simulateKnockoutMatch(teamA, teamB) {
  const rankDifference = teamA.FIBARanking - teamB.FIBARanking;
  const probabilityTeamA = 1 / (1 + Math.pow(10, -rankDifference / 400));

  const randomValue = Math.random();
  const winner = randomValue < probabilityTeamA ? teamA : teamB;
  const loser = winner === teamA ? teamB : teamA;

  const pointDifference = Math.floor(Math.random() * 20) + 5;
  const winnerScore = 80 + Math.floor(Math.random() * 20);
  const loserScore = winnerScore - pointDifference;

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

function simulateKnockoutStage(quarterfinals) {
  const semifinals = [];
  const bronzeMatch = {};
  const finalMatch = {};
  const results = {
    quarterfinals: [],
    semifinals: [],
    bronze: null,
    final: null,
    medalists: [],
  };

  console.log("\nQuarterfinals:");
  for (const match of quarterfinals) {
    const result = simulateKnockoutMatch(match.home, match.away);
    results.quarterfinals.push(result);
    semifinals.push(result.winner);
    console.log(
      `${result.winner.Team} ${result.winner.Score} - ${result.loser.Score} ${result.loser.Team}`
    );
  }

  console.log("\nSemifinals:");
  for (let i = 0; i < 2; i++) {
    const result = simulateKnockoutMatch(semifinals[i], semifinals[i + 2]);
    results.semifinals.push(result);
    finalMatch[i === 0 ? "home" : "away"] = result.winner;
    bronzeMatch[i === 0 ? "home" : "away"] = result.loser;
    console.log(
      `${result.winner.Team} ${result.winner.Score} - ${result.loser.Score} ${result.loser.Team}`
    );
  }

  console.log("\nBronze Match:");
  const bronzeResult = simulateKnockoutMatch(
    bronzeMatch.home,
    bronzeMatch.away
  );
  results.bronze = bronzeResult;
  results.medalists.push({ medal: "Bronze", team: bronzeResult.winner });
  console.log(
    `${bronzeResult.winner.Team} ${bronzeResult.winner.Score} - ${bronzeResult.loser.Score} ${bronzeResult.loser.Team}`
  );

  console.log("\nFinal Match:");
  const finalResult = simulateKnockoutMatch(finalMatch.home, finalMatch.away);
  results.final = finalResult;
  results.medalists.push({ medal: "Gold", team: finalResult.winner });
  results.medalists.push({ medal: "Silver", team: finalResult.loser });
  console.log(
    `${finalResult.winner.Team} ${finalResult.winner.Score} - ${finalResult.loser.Score} ${finalResult.loser.Team}`
  );

  return results;
}

module.exports = {
  simulateKnockoutStage,
};
