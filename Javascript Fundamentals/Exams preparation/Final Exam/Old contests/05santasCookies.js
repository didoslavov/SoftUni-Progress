function santasCookies(input) {
  const [batchesAmount, ...ingredients] = input.map((x) => Number(x));
  let totalBoxes = 0;
  const cup = 140;
  const smallSpoon = 10;
  const bigSpoon = 20;
  const cookieInGrams = 25;
  const cookiesPerBox = 5;

  for (let i = 0; i < batchesAmount; i++) {
    const [flour, sugar, cocoa] = ingredients.splice(0, 3);

    const flourCups = Math.floor(flour / cup);
    const sugarSpoon = Math.floor(sugar / bigSpoon);
    const cocoaSpoon = Math.floor(cocoa / smallSpoon);

    if ((flourCups && sugarSpoon && cocoaSpoon) <= 0) {
      console.log('Ingredients are not enough for a box of cookies.');
      continue;
    } else {
      const currentBatch = Math.floor(
        (((cup + smallSpoon + bigSpoon) * Math.min(flourCups, sugarSpoon, cocoaSpoon)) / cookieInGrams) / cookiesPerBox);

      totalBoxes += currentBatch;
      console.log(`Boxes of cookies: ${currentBatch}`);
    }
  }

  console.log(`Total boxes: ${totalBoxes}`);
}

santasCookies(['2', '200', '300', '500', '100', '200', '50']);
console.log('-------------------');
santasCookies(['1', '1400', '200', '100']);
