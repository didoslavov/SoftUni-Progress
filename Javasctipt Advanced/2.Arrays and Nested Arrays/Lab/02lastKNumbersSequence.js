function lastSequence(sequenceLength, number) {
  let kNumber = 0;
  const numbers = [1];

  for (let i = 1; i < sequenceLength; i++) {
    let sum = 0;

    if (number > numbers.length) {
      kNumber = numbers.length;
    } else {
      kNumber = number;
    }

    for (let j = 1; j <= kNumber; j++) {
      sum += numbers[numbers.length - j];
    }

    numbers.push(sum);
  }
  return numbers;
}

lastSequence(6, 3);
console.log('-------');
lastSequence(8, 2);
