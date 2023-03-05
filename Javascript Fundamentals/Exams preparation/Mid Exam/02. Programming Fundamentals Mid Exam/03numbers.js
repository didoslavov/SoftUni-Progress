function sortNumbers(stringOfNumbers) {
  let numbers = stringOfNumbers.split(' ').map((x) => Number(x));
  let sum = 0;
  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength; i++) {
    sum += numbers[i];
  }

  let printResult = [];
  let avarageNumber = sum / numbersLength;

  for (let i = 0; i < numbersLength; i++) {
    if (numbers[i] > avarageNumber) {
      printResult.push(numbers[i]);
    }
  }

  printResult = printResult.sort((a, b) => b - a).splice(0, 5);

  if (printResult.length <= 0) {
    console.log('No');
  } else {
    console.log(printResult.join(' '));
  }
}

sortNumbers('1 1 1 1 1');
