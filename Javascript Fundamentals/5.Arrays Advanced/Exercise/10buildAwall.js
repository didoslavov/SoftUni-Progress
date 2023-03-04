function wallBuilding(startingHeight) {
  let startingHeightParsed = startingHeight.map(Number);
  const concretePerCicle = 195;
  const concretePricePerCubicYard = 1900;
  let printResult = [];

  const moneyNeeded = function (initialHeight) {
    let concreteUsed = 0;

    for (let i = initialHeight; i < 30; i++) {
      concreteUsed += concretePerCicle;
    }

    return concreteUsed;
  };

  let startingHeightLength = startingHeightParsed.length;
  let totalConcreteUsed = 0;
  let crews = startingHeightParsed.filter((len) => len < 30).length;

  for (let i = 0; i < startingHeightLength; i++) {
    totalConcreteUsed += moneyNeeded(startingHeightParsed[i]);
  }

  while (crews !== 0) {
    let concretePerDay = 0;
    for (let j = 0; j < startingHeightLength; j++) {
      if (startingHeightParsed[j] !== 30) {
        startingHeightParsed[j]++;
        concretePerDay += concretePerCicle;
        if (startingHeightParsed[j] === 30) {
          crews--;
        }
      }
    }
    printResult.push(concretePerDay);
  }

  let totalCosts = totalConcreteUsed * concretePricePerCubicYard;

  console.log(printResult.join(', '));
  console.log(totalCosts + ' pesos');
}
wallBuilding([21, 25, 28]);
