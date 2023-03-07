function jansNotation(input) {
  const operands = [];

  for (const element of input) {
    if (typeof element === 'number') {
      operands.push(element);
    } else if (operands.length >= 2) {
      mathOperations(operands, element);
    } else {
      return 'Error: not enough operands!';
    }
  }

  if (operands.length > 1) {
    return 'Error: too many operands!';
  } else {
    return operands.join();
  }
  function mathOperations(operands, operator) {
    if (operands.length < 2) {
      return 'Error: not enough operands!';
    }
    let firstNum = operands[operands.length - 2];
    let secondNum = operands[operands.length - 1];
    
    const calc = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    }

    const result = calc[operator](firstNum, secondNum)

    operands.pop();
    operands.pop();
    operands.push(result);
  }
}

console.log(jansNotation([3,
    4,
    '+']));
