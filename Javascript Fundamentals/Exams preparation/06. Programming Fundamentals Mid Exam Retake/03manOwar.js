function manOwar(warInput) {
  const pirateShip = warInput.shift().split('>').map(Number);
  const battleShip = warInput.shift().split('>').map(Number);
  const maxHealth = Number(warInput.shift());

  for (let commandsInfo of warInput) {
    const commandLine = commandsInfo.split(' ');
    const command = commandLine[0];

    if (command === 'Retire') {
      break;
    }

    switch (command) {
      case 'Fire':
        const battleShipIndex = Number(commandLine[1]);
        const damageDealt = Number(commandLine[2]);

        if (battleShipIndex >= 0 && battleShipIndex < battleShip.length) {
          battleShip[battleShipIndex] -= damageDealt;

          if (battleShip[battleShipIndex] <= 0) {
            return console.log(`You won! The enemy ship has sunken.`);
          }
        }
        break;
      case 'Defend':
        const startIndex = Number(commandLine[1]);
        const endIndex = Number(commandLine[2]);
        const damageTaken = Number(commandLine[3]);

        if (
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex >= 0 &&
          endIndex < pirateShip.length
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damageTaken;

            if (pirateShip[startIndex] <= 0) {
              return console.log(`You lost! The pirate ship has sunken.`);
            }
          }
        }
        break;
      case 'Repair':
        const pirateShipIndex = Number(commandLine[1]);
        const health = Number(commandLine[2]);

        if (pirateShipIndex >= 0 && pirateShipIndex < pirateShip.length) {
          if (pirateShip[pirateShipIndex] + health <= maxHealth) {
            pirateShip[pirateShipIndex] += health;
          } else {
            pirateShip[pirateShipIndex] = maxHealth;
          }
        }
        break;
      case 'Status':
        let countSections = 0;
        const minHealth = maxHealth * 0.2;

        for (const sectionHealth of pirateShip) {
          if (sectionHealth < minHealth) {
            countSections++;
          }
        }
        console.log(`${countSections} sections need repair.`);
        break;
    }
  }

  let pirateShipSum = 0;

  for (const pirateSection of pirateShip) {
    pirateShipSum += pirateSection;
  }

  let battleShipSum = 0;

  for (const battleSection of battleShip) {
    battleShipSum += battleSection;
  }

  console.log(`Pirate ship status: ${pirateShipSum}
    Warship status: ${battleShipSum}`);
}

manOwar([
  '2>3>4>5>2',
  '6>7>8>9>10>11',
  '20',
  'Status',
  'Fire 2 3',
  'Defend 0 4 11',
  'Repair 3 18',
  'Retire',
]);
