function trekkingMania(input) {
  let groups = Number(input[0]);
  let peopleInGroup = 0;
  let totalPeople = 0;
  let mixedGroups = 0;
  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (i = 1; i < input.length; i++) {
    peopleInGroup = Number(input[i]);
    totalPeople += peopleInGroup;

    if (peopleInGroup <= 5) {
      musala += peopleInGroup;
    } else if (peopleInGroup <= 12) {
      monblan += peopleInGroup;
    } else if (peopleInGroup <= 25) {
      kilimanjaro += peopleInGroup;
    } else if (peopleInGroup <= 40) {
      k2 += peopleInGroup;
    } else if (peopleInGroup > 40) {
      everest += peopleInGroup;
    }
  }
  console.log(((musala / totalPeople) * 100).toFixed(2) + "%");
  console.log(((monblan / totalPeople) * 100).toFixed(2) + "%");
  console.log(((kilimanjaro / totalPeople) * 100).toFixed(2) + "%");
  console.log(((k2 / totalPeople) * 100).toFixed(2) + "%");
  console.log(((everest / totalPeople) * 100).toFixed(2) + "%");
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);
