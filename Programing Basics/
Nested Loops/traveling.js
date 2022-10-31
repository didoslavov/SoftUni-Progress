function traveling(input) {
  let i = 0;
  let destination = input[i];
  i++;
  let budget = Number(input[i]);
  i++;
  let moneyToSave = input[i];
  let savedMoney = 0;

  while (destination !== "End") {
    while (budget > savedMoney) {
      moneyToSave = Number(input[i]);
      savedMoney += moneyToSave;
      i++;

      if (savedMoney >= budget) {
        console.log(`Going to ${destination}!`);
      }
    }
    savedMoney = 0;
    destination = input[i];
    i++;
    budget = Number(input[i]);
    i++;
  }
}

traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
