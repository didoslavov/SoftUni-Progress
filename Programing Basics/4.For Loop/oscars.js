function oscars(input) {
  let actorName = input[0];
  let startingPoints = Number(input[1]);
  let joureyCount = Number(input[2]);
  let joureyName = "";
  let joureyPoints = 0;
  let totalPoints = 0;
  let points = 0;

  for (i = 3; i < input.length; i++) {
    joureyName = input[i];
    i++;
    joureyPoints = Number(input[i]);

    points += (joureyName.length * joureyPoints) / 2;

    totalPoints = startingPoints + points;
    if (totalPoints >= 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (totalPoints < 1250.5) {
    console.log(
      `Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`
    );
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
