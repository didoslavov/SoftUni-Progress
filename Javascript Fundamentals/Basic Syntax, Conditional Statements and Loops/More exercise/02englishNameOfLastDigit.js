function lastDigitText(number) {
  const numberArray = number.toString().split('').map(Number);
  const lastDigit = numberArray.pop();
  let printResult = '';

  switch (lastDigit) {
    case 0:
        printResult = 'zero';
      break;
    case 1:
        printResult = 'one';
      break;
    case 2:
        printResult = 'two';
      break;
    case 3:
        printResult = 'three';
      break;
    case 4:
        printResult = 'four';
      break;
    case 5:
        printResult = 'five';
      break;
    case 6:
        printResult = 'six';
      break;
    case 7:
        printResult = 'seven';
      break;
    case 8:
        printResult = 'eigth';
      break;
    case 9:
        printResult = 'nine';
      break;
  }

  console.log(printResult);
}

lastDigitText(1643);
