function calculator(firsNumber, operator, secondNumber) {
    let result = 0;

  switch (operator) {
    case '+':
        result = firsNumber + secondNumber;
      break;
    case '-':
        result = firsNumber - secondNumber;
      break;
    case '/':
        result = firsNumber / secondNumber;
      break;
    case '*':
        result = firsNumber * secondNumber;
      break;
  }

  console.log(result.toFixed(2));
}

calculator(5, '+', 10);
