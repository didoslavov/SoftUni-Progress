function maxNumber(input) {
  let i = 0;
  let currentNumber = input[i];
  let previousNumber = Number(input[0]);

  while (currentNumber !== "Stop") {
    currentNumber = Number(input[i]);
    if (currentNumber < 0) {
      if (currentNumber > previousNumber) {
        previousNumber = currentNumber;
      } else {
        previousNumber = previousNumber;
      }
    } else {
      if (currentNumber > previousNumber) {
        previousNumber = currentNumber;
      } else {
        previousNumber = previousNumber;
      }
    }
    i++;
    currentNumber = input[i];
  }
  console.log(previousNumber);
}

maxNumber(["999", "Stop"]);
