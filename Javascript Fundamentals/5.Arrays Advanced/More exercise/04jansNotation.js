function jansNotation(input) {
  const operands = [];

  for (const element of input) {
    if (typeof element === 'number') {
      operands.push(element);
    } else if (operands.length >= 2) {
      mathOperations(operands, element);
    } else {
      console.log('Error: not enough operands!');
      return;
    }
  }

  if (operands.length > 1) {
    console.log('Error: too many operands!');
    return;
  } else {
    console.log(operands.join());
  }

  function mathOperations(operands, operator) {
    if (operands.length < 2) {
      console.log('Error: not enough operands!');
      return;
    }
    let firstNum = operands[operands.length - 2];
    let secondNum = operands[operands.length - 1];
    let result = 0;

    switch (operator) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case '*':
        result = firstNum * secondNum;
        break;
      case '/':
        result = firstNum / secondNum;
        break;
    }

    operands.pop();
    operands.pop();
    operands.push(result);
  }
}

jansNotation([3,
    4,
    '+']);
