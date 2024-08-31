function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function performDraw(rankedTeams) {
  const pots = {
    D: rankedTeams.slice(0, 2),
    E: rankedTeams.slice(2, 4),
    F: rankedTeams.slice(4, 6),
    G: rankedTeams.slice(6, 8),
  };

  const quarterfinals = [];

  for (const pot in pots) {
    pots[pot] = shuffleArray(pots[pot]);
  }

  for (let i = 0; i < 2; i++) {
    quarterfinals.push({
      home: pots.D[i],
      away: pots.G[i],
    });

    quarterfinals.push({
      home: pots.E[i],
      away: pots.F[i],
    });
  }

  return quarterfinals;
}

module.exports = {
  performDraw,
};
