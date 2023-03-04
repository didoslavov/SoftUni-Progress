function minNumber(input) {
  let i = 0;
  let currentNumber = input[i];
  let previousNumber = Number[0];

  while (currentNumber !== "Stop") {
    currentNumber = Number(input[i]);

    if (currentNumber < 0) {
      if (currentNumber > previousNumber) {
        previousNumber = previousNumber;
      } else {
        previousNumber = currentNumber;
      }
    } else {
      if (currentNumber > previousNumber) {
        previousNumber = previousNumber;
      } else {
        previousNumber = currentNumber;
      }
    }
    i++;
    currentNumber = input[i];
  }
  console.log(previousNumber);
}

minNumber(["999", "Stop"]);
