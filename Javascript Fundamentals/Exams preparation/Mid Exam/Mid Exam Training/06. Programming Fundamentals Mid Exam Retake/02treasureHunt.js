function treasureHunt(input) {
  const chest = input.shift().split('|');
  let line = input.shift();

  while (line !== 'Yohoho!') {
    line = line.split(' ');
    const command = line.shift();

    switch (command) {
      case 'Loot':
        const items = line.splice(0);
        for (const item of items) {
          if (chest.includes(item)) {
            continue;
          }
          chest.unshift(item);
        }
        break;
      case 'Drop':
        const index = Number(line.shift());
        const isValid = index >= 0 && index < chest.length;

        if (!isValid) {
          line = input.shift();
          continue;
        }

        const item = chest.splice(index, 1).join('');
        chest.push(item);
        break;
      case 'Steal':
        const count = Number(line.shift());
        const stolenItems = chest.splice(-count);
        console.log(stolenItems.join(', '));
        break;
    }
    line = input.shift();
  }

  let sum = 0;
  for (const item of chest) {
    sum += item.length;
  }

  const avgGain = sum / chest.length;

  if (chest.length === 0) {
    console.log('Failed treasure hunt.');
  } else {
    console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
  }
}

treasureHunt([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!',
]);
console.log('--------------');
treasureHunt([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
