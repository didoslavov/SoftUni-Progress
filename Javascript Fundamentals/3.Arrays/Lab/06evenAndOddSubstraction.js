function evenAndOddSubstraction(numbers) {
  let sumOfEvens = 0;
  let sumOfOdds = 0;

  for (let number of numbers) {
    if (number % 2 == 0) {
      sumOfEvens += number;
    } else {
      sumOfOdds += number;
    }
  }

  let printResult = sumOfEvens - sumOfOdds;

  console.log(printResult);
}

evenAndOddSubstraction([3,5,7,9]);
