function radioCrystals(input) {
  const targetThickness = input.shift();

  const cut = (crystal) => crystal / 4;
  const lap = (crystal) => crystal * 0.8;
  const grind = (crystal) => crystal - 20;
  const etch = (crystal) => crystal - 2;
  const xray = (crystal) => crystal + 1;

  for (let initialThickness of input) {
    console.log(`Processing chunk ${initialThickness} microns`);

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    while (cut(initialThickness) >= targetThickness) {
      cutCount++;
      initialThickness = cut(initialThickness);
    }
    if (cutCount > 0) {
      console.log(`Cut x${cutCount}`);
      console.log(`Transporting and washing`);
      initialThickness = Math.floor(initialThickness);
    }

    while (lap(initialThickness) >= targetThickness) {
      lapCount++;
      initialThickness = lap(initialThickness);
    }
    if (lapCount > 0) {
      console.log(`Lap x${lapCount}`);
      console.log(`Transporting and washing`);
      initialThickness = Math.floor(initialThickness);
    }

    while (grind(initialThickness) >= targetThickness) {
      grindCount++;
      initialThickness = grind(initialThickness);
    }
    if (grindCount > 0) {
      console.log(`Grind x${grindCount}`);
      console.log(`Transporting and washing`);
      initialThickness = Math.floor(initialThickness);
    }

    while (etch(initialThickness) >= targetThickness) {
      etchCount++;
      initialThickness = etch(initialThickness);
    }
    if (etchCount > 0) {
      console.log(`Etch x${etchCount}`);
      console.log(`Transporting and washing`);
      initialThickness = Math.floor(initialThickness);
    }

    if (initialThickness < targetThickness) {
      initialThickness = xray(initialThickness);
      console.log(`X-ray x1`);
    }
    console.log(`Finished crystal ${initialThickness} microns`);
  }
}

radioCrystals([1000, 4000, 8100]);
