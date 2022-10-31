function tennisRankList(input) {
  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let tournamentStage = "";
  let currentPoints = 0;
  let winings = 0;
  let avgPoints = 0;
  let totalPoints = 0;
  let winingsPercentage = 0;

  for (let i = 2; i < input.length; i++) {
    tournamentStage = input[i];
    switch (tournamentStage) {
      case "W":
        currentPoints += 2000;
        winings++;
        break;
      case "F":
        currentPoints += 1200;
        break;
      case "SF":
        currentPoints += 720;
        break;
    }
  }
  avgPoints = currentPoints / tournamentsCount;
  totalPoints = currentPoints + startingPoints;
  winingsPercentage = (winings / tournamentsCount) * 100;

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(`${winingsPercentage.toFixed(2)}%`);
}

tennisRankList(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
