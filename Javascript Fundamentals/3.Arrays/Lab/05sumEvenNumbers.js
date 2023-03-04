function sumEvenNumbers(numbers) {
  let arrayLength = numbers.length;
  let sumOfEvens = 0;

  for (let i = 0; i < arrayLength; i++) {
    let currentNumber = Number(numbers[i]);

    if (currentNumber % 2 == 0) {
      sumOfEvens += currentNumber;
    }
  }
  console.log(sumOfEvens);
}

sumEvenNumbers(['2','4','6','8','10']);
