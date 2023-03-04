function searchNumber(numbers, manipulations) {
  let totalNumbers = manipulations[0];
  let deleteNumbers = manipulations[1];
  let searchedNumber = manipulations[2];
  let count = 0;

  let mutatedNumbers = numbers.splice(0, totalNumbers);
  mutatedNumbers.splice(0, deleteNumbers);

  let mutatedNumbersL = mutatedNumbers.length;

// Cleaner, nice looking way to solve the problem.
//   mutatedNumbers.forEach(element => (element == searchedNumber && count++));

  for (let i = 0; i < mutatedNumbersL; i++) {
    if (searchedNumber == mutatedNumbers[i]) {
      count++;
    }
}

console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 5, 5, 8, 2, 7],
    [3, 1, 5]);