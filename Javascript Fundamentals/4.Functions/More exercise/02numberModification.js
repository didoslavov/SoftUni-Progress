function numberModification(number) {
  const numbers = number.toString().split('').map(Number);
  let sum = numbers.reduce((a, b) => {
    return a + b;
  }, 0);

  while (sum / numbers.length <= 5) {
    numbers.push(9);
    sum = numbers.reduce((a, b) => {
      return a + b;
    }, 0);
  }
  return numbers.join('');
}

numberModification(5835);
