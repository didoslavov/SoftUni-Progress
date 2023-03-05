function stashCalculator(input) {
  let totalFood = Number(input.shift());
  let totalHay = Number(input.shift());
  let totalCovers = Number(input.shift());
  let pigWeight = Number(input.shift());

  for (let i = 1; i <= 30; i++) {
    totalFood = Number(totalFood.toFixed(4)) - 0.3;

    if (i % 2 === 0) {
      totalHay -= totalFood * 0.05;
    }

    if (i % 3 === 0) {
      totalCovers -= pigWeight / 3;
    }

    if (totalFood <= 0 || totalHay <= 0 || totalCovers <= 0) {
      break;
    }
  }

  if (totalFood > 0 && totalHay > 0 && totalCovers > 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${totalFood.toFixed(2)}, Hay: ${totalHay.toFixed(2)}, Cover: ${totalCovers.toFixed(2)}.`
    );
  } else {
    console.log('Merry must go to the pet store!');
  }
}

stashCalculator(["9",
"5",
"5.2",
"1"]);
