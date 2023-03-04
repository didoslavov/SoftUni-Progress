function reverseAnArrayOfNumbers(counter, numbers) {
  let reversedArray = [];

  for (let i = 0; i <= counter - 1; i++) {
    reversedArray[i] = numbers[counter - 1 - i];
  }

  let printResult = '';
  
  for (let i = 0; i < reversedArray.length; i++) {
    printResult += reversedArray[i];

    if (i < reversedArray.length - 1) {
      printResult += ' ';
    }
  }

  console.log(printResult);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
