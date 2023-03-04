function simpleCalculator(firstNumber, secondNumber, operator) {
  let result = 0;

  switch (operator) {
    case "add":
      result = ((x, y) => {
        return x + y;
      })(firstNumber, secondNumber);
      break;
    case "subtract":
      result = ((x, y) => {
        return x - y;
      })(firstNumber, secondNumber);
      break;
    case "multiply":
      result = ((x, y) => {
        return x * y;
      })(firstNumber, secondNumber);
      break;
    case "divide":
      result = ((x, y) => {
        return x / y;
      })(firstNumber, secondNumber);
      break;
  }
  return result;
}
simpleCalculator(40, 8, "divide");
