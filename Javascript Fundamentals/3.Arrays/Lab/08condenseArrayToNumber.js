function condenseArrayToNumber(numbers) {
  let condensedNumbers = [];

  while (numbers.length !== 1) {
    for (let i = 0; i < numbers.length - 1; i++) {
      condensedNumbers[i] = numbers[i] + numbers[i + 1];
    }
    numbers = condensedNumbers;
    condensedNumbers = [];
  }
  console.log(numbers[0]);
}

condenseArrayToNumber([2, 10, 3]);
