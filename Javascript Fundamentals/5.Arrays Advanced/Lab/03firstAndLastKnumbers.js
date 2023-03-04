function firstAndLasatKNumbers(numbers) {
  let pairLength = numbers.shift();
  let firstPair = numbers.slice(0, pairLength);
  let secondPair = numbers.slice(numbers.length - pairLength);
  console.log(firstPair.join(" "));
  console.log(secondPair.join(" "));
}

firstAndLasatKNumbers([3, 6, 7, 8, 9]);
