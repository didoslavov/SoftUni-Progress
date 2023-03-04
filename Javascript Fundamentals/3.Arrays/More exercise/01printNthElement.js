function printNElement(input) {
  const step = Number(input.pop());
  const printResult = [];
  printResult.push(input[0]);
  let currentPosition = 0;

  while (currentPosition + step < input.length) {
    printResult.push(input[currentPosition + step]);
    currentPosition += step;
  }

  console.log(printResult.join(' '));
}

printNElement(['dsa', 'asd', 'test', 'test', '2']);
