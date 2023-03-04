function pyramid(baseSize, baseHigth) {
  let totalStones = 0;
  let totalMarbels = 0;
  let totalLapisLazuli = 0;
  let totalGoldBlocks = 0;
  let totalSteps = 0;

  for (let i = baseSize; i > 0; i -= 2) {
    totalSteps++;
    let outerLayer = (i * 4 - 4) * baseHigth;
    let innerLayer = (i - 2) * (i - 2) * baseHigth;

    if (i <= 2) {
      totalGoldBlocks = i * i * baseHigth;
      break;
    } else if (totalSteps % 5 == 0) {
      totalLapisLazuli += outerLayer;
      totalStones += innerLayer;
    } else {
      totalMarbels += outerLayer;
      totalStones += innerLayer;
    }
  }

  let pyramidHigth = totalSteps * baseHigth;

  console.log(`Stone required: ${Math.ceil(totalStones)}`);
  console.log(`Marble required: ${Math.ceil(totalMarbels)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(totalGoldBlocks)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHigth)}`);
}

pyramid(12, 1);
