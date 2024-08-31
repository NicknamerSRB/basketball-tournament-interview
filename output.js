function displayGroupResults(groupStageResults) {
  console.log("Group Stage Results:");
  for (const group in groupStageResults) {
    console.log(`\nGroup ${group}:`);
    groupStageResults[group].forEach((match) => {
      console.log(
        `${match.winner.Team} ${match.winner.Score} - ${match.loser.Score} ${match.loser.Team}`
      );
    });
  }
}

function displayRankings(rankedTeams) {
  console.log("\nFinal Group Rankings:");
  rankedTeams.forEach((team, index) => {
    console.log(`${index + 1}. ${team.Team} - Points: ${team.Points}`);
  });
}

function displayQuarterfinalsDraw(quarterfinals) {
  console.log("\nQuarterfinals Draw:");
  quarterfinals.forEach((match) => {
    console.log(`${match.home.Team} vs ${match.away.Team}`);
  });
}

function displayMedalWinners(knockoutResults) {
  console.log("\nMedal Winners:");
  knockoutResults.medalists.forEach((medalist) => {
    console.log(`${medalist.medal}: ${medalist.team.Team}`);
  });
}

module.exports = {
  displayGroupResults,
  displayRankings,
  displayQuarterfinalsDraw,
  displayMedalWinners,
};
