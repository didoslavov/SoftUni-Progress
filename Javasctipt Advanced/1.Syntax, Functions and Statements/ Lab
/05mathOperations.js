function mathOperation(firstNum, secondNum, operator) {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '**': (x, y) => x ** y,
        '%': (x, y) => x % y,
    };
    return operators[operator](firstNum, secondNum);
}

console.log(mathOperation(5, 6, '+'))
console.log(mathOperation(3, 5.5, '*'))