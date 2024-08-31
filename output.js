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

function displayKnockoutResults(knockoutResults) {
  console.log("\nKnockout Stage Results:");

  console.log("\nQuarterfinals:");
  knockoutResults.quarterfinals.forEach((match) => {
    console.log(
      `${match.winner.Team} ${match.winner.Score} - ${match.loser.Score} ${match.loser.Team}`
    );
  });

  console.log("\nSemifinals:");
  knockoutResults.semifinals.forEach((match) => {
    console.log(
      `${match.winner.Team} ${match.winner.Score} - ${match.loser.Score} ${match.loser.Team}`
    );
  });

  console.log("\nBronze Match:");
  const bronze = knockoutResults.bronze;
  console.log(
    `${bronze.winner.Team} ${bronze.winner.Score} - ${bronze.loser.Score} ${bronze.Team}`
  );

  console.log("\nFinal Match:");
  const finalMatch = knockoutResults.final;
  console.log(
    `${finalMatch.winner.Team} ${finalMatch.winner.Score} - ${finalMatch.loser.Score} ${finalMatch.Team}`
  );

  console.log("\nMedal Winners:");
  knockoutResults.medalists.forEach((medalist) => {
    console.log(`${medalist.medal}: ${medalist.team.Team}`);
  });
}

module.exports = {
  displayGroupResults,
  displayRankings,
  displayQuarterfinalsDraw,
  displayKnockoutResults,
};
