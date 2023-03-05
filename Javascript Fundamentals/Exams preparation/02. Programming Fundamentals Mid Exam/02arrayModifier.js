function manipulatingArrays(arrayData) {
  let manipulatedArray = arrayData
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let command = arrayData.shift().split(' ');

  while (!command.includes('end')) {
    let currentCommand = command[0];
    let firstIndex = Number(command[1]);
    let secondIndex = Number(command[2]);

    switch (currentCommand) {
      case 'swap':
        [manipulatedArray[firstIndex], manipulatedArray[secondIndex]] = [manipulatedArray[secondIndex], manipulatedArray[firstIndex]]; 
        break;
      case 'multiply':
        let multipliedResult = manipulatedArray[firstIndex] * manipulatedArray[secondIndex];
        manipulatedArray.splice(firstIndex, 1, multipliedResult);
        break;
      case 'decrease':
        manipulatedArray = manipulatedArray.map(x => x -1);
        break;
    }
    command = arrayData.shift().split(' ');
  }
  console.log(manipulatedArray.join(', '));
}

manipulatingArrays([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);
