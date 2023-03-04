function findTopIntegers(numbers) {
  const numbersLength = numbers.length;
  const topIntegers = [];

  for (let i = 0; i <= numbersLength; i++) {
    let currentNumber = numbers[i];
    let isBigger = true;

    for (let j = i + 1; j < numbersLength; j++) {
      if (currentNumber <= numbers[j]) {
        isBigger = false;
      }
    }
    if (isBigger) {
        topIntegers.push(numbers[i])
    }
  }
  console.log(topIntegers.join(' '));
}

findTopIntegers([14, 24, 3, 19, 15, 17]);
