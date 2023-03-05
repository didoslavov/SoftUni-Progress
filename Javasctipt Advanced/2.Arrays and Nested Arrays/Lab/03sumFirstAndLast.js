function sumFirstAndLast(input) {
  const numbers = input.map((x) => Number(x));
  return numbers[0] + numbers[numbers.length - 1];
}

sumFirstAndLast(['20', '30', '40']);
