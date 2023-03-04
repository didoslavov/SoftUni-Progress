function findSumOfDigits(number) {
  const numbers = number
    .toString()
    .split('')
    .map((x) => Number(x));
  let sumOfDigits = 0;

  for (const number of numbers) {
    sumOfDigits += number;
  }
  console.log(sumOfDigits);
}

findSumOfDigits(97561);
