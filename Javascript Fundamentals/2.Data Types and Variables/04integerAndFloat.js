function integerAndFloat(firstNum, secondNum, thirdNum) {
  let sum = firstNum + secondNum + thirdNum;
  let isFloat = sum % 1 == 0 ? true : false;

  if (!isFloat) {
    console.log(`${sum} - Float`);
  } else {
    console.log(`${sum} - Integer`);
  }
}

integerAndFloat(100, 200, 303);
