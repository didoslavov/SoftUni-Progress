function airPollution(mapInput, commandLine) {
  const map = [];
  mapInput.forEach((element) => {
    map.push(element.split(' ').map(Number));
  });
  const commandLineLength = commandLine.length;

  for (let i = 0; i < commandLineLength; i++) {
    const command = commandLine[i].slice(0).split(' ')[0];
    const commandValue = Number(commandLine[i].slice(0).split(' ')[1]);
    const mapLength = map.length;

    switch (command) {
      case 'breeze':
        for (let column = 0; column < map[commandValue].length; column++) {
          if (map[commandValue][column] - 15 >= 0) {
            map[commandValue][column] -= 15;
          } else {
            map[commandValue][column] = 0;
          }
        }
        break;
      case 'gale':
        for (let row = 0; row < mapLength; row++) {
          if (map[row][commandValue] - 20 >= 0) {
            map[row][commandValue] -= 20;
          } else {
            map[row][commandValue] = 0;
          }
        }
        break;
      case 'smog':
        for (let row = 0; row < mapLength; row++) {
          for (let column = 0; column < mapLength; column++) {
            map[row][column] += commandValue;
          }
        }
        break;
    }
  }

  let pollutedBlocks = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] >= 50) {
        pollutedBlocks.push(`[${i}-${j}]`);
      }
    }
  }
  if (pollutedBlocks.length === 0) {
    console.log(`No polluted areas`);
  } else {
    console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
  }
}
airPollution(
  [
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24',
  ],
  ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);
