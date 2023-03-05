function arrayModifier(input) {
  let integers = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let line = input.shift();

  while (line !== 'end') {
    line = line.split(' ');
    const command = line[0];
    const firstIndex = Number(line[1]);
    const secondIndex = Number(line[2]);

    switch (command) {
      case 'swap':
        swap(integers, firstIndex, secondIndex);
        break;
      case 'multiply':
        multiply(integers, firstIndex, secondIndex);
        break;
      case 'decrease':
        integers = decrease(integers);
        break;
    }
    line = input.shift();
  }

  return integers.join(', ');

  function swap(array, firstIndex, secondIndex) {
    const firstElement = array[firstIndex];
    const secondElement = array[secondIndex];

    array[firstIndex] = secondElement;
    array[secondIndex] = firstElement;

    return array;
  }

  function multiply(array, firstIndex, secondIndex) {
    const firstElement = array[firstIndex];
    const secondElement = array[secondIndex];
    array[firstIndex] = secondElement * firstElement;
    return array;
  }

  function decrease(array) {
    return array.map((x) => x - 1);
  }
}

console.log(
  arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end',
  ])
);
console.log('-----------');
console.log(
  arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end',
  ])
);
