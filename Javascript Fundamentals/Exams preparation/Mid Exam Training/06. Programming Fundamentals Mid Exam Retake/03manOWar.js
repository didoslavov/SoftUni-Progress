function manOWar(input) {
  const pirateShip = input
    .shift()
    .split('>')
    .map((x) => Number(x));
  const warShip = input
    .shift()
    .split('>')
    .map((x) => Number(x));
  const maxHealth = Number(input.shift());

  let line = input.shift();

  while (line !== 'Retire') {
    line = line.split(' ');
    const command = line.shift();

    switch (command) {
      case 'Fire':
        const index = Number(line.shift());
        const damage = Number(line.shift());
        const isValid = index >= 0 && index < warShip.length;

        if (!isValid) {
          line = input.shift();
          continue;
        }

        warShip[index] -= damage;

        if (warShip[index] - damage <= 0) {
          console.log('You won! The enemy ship has sunken.');
          return;
        }
        break;
      case 'Defend':
        const startIndex = Number(line.shift());
        const endIndex = Number(line.shift());
        const damageDealt = Number(line.shift());
        const areValid =
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex >= 0 &&
          endIndex < pirateShip.length;

        if (!areValid) {
          line = input.shift();
          continue;
        }

        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= damageDealt;

          if (pirateShip[i] <= 0) {
            console.log('You lost! The pirate ship has sunken.');
            return;
          }
        }
        break;
      case 'Repair':
        const repairIndex = Number(line.shift());
        const health = Number(line.shift());
        const repairIndexIsValid =
          repairIndex >= 0 && repairIndex < pirateShip.length;

        if (!repairIndexIsValid) {
          line = input.shift();
          continue;
        }

        pirateShip[repairIndex] += health;

        if (pirateShip[repairIndex] > maxHealth) {
          pirateShip[repairIndex] = maxHealth;
        }
        break;
      case 'Status':
        const count = pirateShip.filter((el) => el < maxHealth * 0.2).length;
        console.log(`${count} sections need repair.`);
        break;
    }

    line = input.shift();
  }
  let pirateShipState = pirateShip.reduce((acc, section) => acc + section, 0);
  let warShipState = warShip.reduce((acc, section) => acc + section, 0);
  console.log(`Pirate ship status: ${pirateShipState}`);
  console.log(`Warship status: ${warShipState}`);
}

manOWar([
  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire 2 11',
  'Fire 8 100',
  'Defend 3 6 11',
  'Defend 0 3 5',
  'Repair 1 33',
  'Status',
  'Retire',
]);
console.log('------------');
manOWar([
  '2>3>4>5>2',
  '6>7>8>9>10>11',
  '20',
  'Status',
  'Fire 2 3',
  'Defend 0 4 11',
  'Repair 3 18',
  'Retire',
]);
