function rankTeamsByGroup(groupsData, groupStageResults) {
  const rankedGroups = {};

  for (const group in groupsData) {
    const teams = groupsData[group];

    teams.forEach((team) => {
      const teamResults = groupStageResults[group].filter(
        (match) =>
          match.winner.Team === team.Team || match.loser.Team === team.Team
      );

      team.Points = teamResults.reduce((sum, match) => {
        return sum + (match.winner.Team === team.Team ? 2 : 1);
      }, 0);

      team.Scored = teamResults.reduce((sum, match) => {
        return (
          sum +
          (match.winner.Team === team.Team
            ? match.winner.Score
            : match.loser.Score)
        );
      }, 0);

      team.Conceded = teamResults.reduce((sum, match) => {
        return (
          sum +
          (match.winner.Team === team.Team
            ? match.loser.Score
            : match.winner.Score)
        );
      }, 0);

      team.PointDifference = team.Scored - team.Conceded;
    });

    teams.sort((a, b) => {
      if (b.Points !== a.Points) return b.Points - a.Points;
      if (b.PointDifference !== a.PointDifference)
        return b.PointDifference - a.PointDifference;
      return b.Scored - a.Scored;
    });

    rankedGroups[group] = teams;
  }

  return rankedGroups;
}

function globalRanking(rankedGroups) {
  const allTeams = [];

  for (const group in rankedGroups) {
    allTeams.push(...rankedGroups[group]);
  }

  allTeams.sort((a, b) => {
    if (b.Points !== a.Points) return b.Points - a.Points;
    if (b.PointDifference !== a.PointDifference)
      return b.PointDifference - a.PointDifference;
    return b.Scored - a.Scored;
  });

  return allTeams;
}

module.exports = {
  rankTeamsByGroup,
  globalRanking,
};
