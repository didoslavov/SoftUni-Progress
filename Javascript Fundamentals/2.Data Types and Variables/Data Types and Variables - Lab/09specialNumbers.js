function specialNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let currentDigit = i;
    while (currentDigit !== 0) {
      sum += currentDigit % 10;
      currentDigit = parseInt(currentDigit / 10);
    }
    let isSpecial = sum == 5 || sum == 7 || sum == 11;
    sum = 0;
    if (isSpecial) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(5);
