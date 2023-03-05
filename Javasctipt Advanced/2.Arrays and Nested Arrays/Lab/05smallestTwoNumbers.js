function smallestTwoNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .filter((x, i) => i === 0 || i === 1)
    .join(' ');
}

smallestTwoNumbers([30, 15, 50, 5]);
