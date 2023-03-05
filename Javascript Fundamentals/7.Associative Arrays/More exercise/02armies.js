function armies(input) {
  const armies = {};

  for (const line of input) {
    if (line.includes('arrives')) {
      const leader = line.split(' arrives').shift();

      if (!armies.hasOwnProperty(leader)) {
        armies[leader] = {};
      }
    } else if (line.includes(':')) {
      const [leader, armyInfo] = line.split(': ');

      if (armies.hasOwnProperty(leader)) {
        const [armyName, armyCount] = armyInfo.split(', ');
        armies[leader][armyName] = Number(armyCount);
      }
    } else if (line.includes('+')) {
      const [armyName, armyCount] = line.split(' + ');

      for (const leader in armies) {
        if (armies[leader].hasOwnProperty(armyName)) {
          armies[leader][armyName] += Number(armyCount);
        }
      }
    } else if (line.includes('defeat')) {
      const leader = line.split(' defeat').shift();

      if (armies.hasOwnProperty(leader)) {
        delete armies[leader];
      }
    }
  }

  const sorted = Object.entries(armies).sort(armiesSorter);

  for (const [leader, army] of sorted) {
    const totalArmy = Object.values(army).reduce((a, b) => a + b, 0);

    console.log(`${leader}: ${totalArmy}`);

    const sortedArmies = Object.entries(army).sort((a, b) => b[1] - a[1]);

    for (const army of sortedArmies) {
      console.log(`>>> ${army[0]} - ${army[1]}`);
    }
  }

  function armiesSorter(a, b) {
    const [armyNameA, armyCountA] = a;
    const [armyNameB, armyCountB] = b;

    const totalArmyA = (army) =>
      Object.values(armyCountA).reduce((a, b) => a + b, 0);
    const totalArmyB = (army) =>
      Object.values(armyCountB).reduce((a, b) => a + b, 0);

    const result = totalArmyB(armyCountB) - totalArmyA(armyCountA);

    return result;
  }
}

armies([
  'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205',
]);
console.log('---------------');
armies([
  'Rick Burr arrives',
  'Findlay arrives',
  'Rick Burr: Juard, 1500',
  'Wexamp arrives',
  'Findlay: Wexamp, 34540',
  'Wexamp + 340',
  'Wexamp: Britox, 1155',
  'Wexamp: Juard, 43423',
]);
