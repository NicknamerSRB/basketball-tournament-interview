const fs = require("fs");
const path = require("path");
const { simulateGroupStage } = require("./simulation");
const { rankTeamsByGroup, globalRanking } = require("./ranking");
const { performDraw } = require("./draw");
const { simulateKnockoutStage } = require("./knockout");
const {
  displayGroupResults,
  displayRankings,
  displayQuarterfinalsDraw,
  displayKnockoutResults,
} = require("./output");

const groupsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "groups.json"))
);
const exhibitionsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "exibitions.json"))
);

console.log("Starting Group Stage...");
const groupStageResults = simulateGroupStage(groupsData, exhibitionsData);

displayGroupResults(groupStageResults);

console.log("\nRanking Teams within Groups...");
const rankedGroups = rankTeamsByGroup(groupsData, groupStageResults);
const rankedTeams = globalRanking(rankedGroups);

displayRankings(rankedTeams);

console.log("\nPerforming Draw for Knockout Stage...");
const quarterfinals = performDraw(rankedTeams);
displayQuarterfinalsDraw(quarterfinals);

console.log("\nStarting Knockout Stage...");
const knockoutResults = simulateKnockoutStage(quarterfinals);

displayKnockoutResults(knockoutResults);
