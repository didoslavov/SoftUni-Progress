function planetDiscovery(input) {
  const initNumber = Number(input.shift());
  const plants = {};

  input.splice(0, initNumber).forEach((p) => {
    const [plant, rarity] = p.split('<->');
    plants[plant] = {
      rarity: Number(rarity),
      ratings: [],
    };
  });

  let line = input.shift();

  while (line !== 'Exhibition') {
    const [command, plantsInfo] = line.split(': ');
    const [plant, param] = plantsInfo.split(' - ');
    
    if (!plants.hasOwnProperty(plant)) {
        console.log('error');
        line = input.shift();
        continue;
    }
    switch (command) {
      case 'Rate':
        plants[plant].ratings.push(Number(param));
        break;
      case 'Update':
        plants[plant].rarity = Number(param);
        break;
      case 'Reset':
        plants[plant].ratings = [];
        break;
    }
    line = input.shift();
  }
  
  console.log('Plants for the exhibition:');
  for (const plant in plants) {
    let avrgRating = 0;

    if (plants[plant].ratings.length > 0) {
        avrgRating = plants[plant].ratings.reduce((acc, r) => acc + r, 0) / plants[plant].ratings.length;
    }
    
    console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avrgRating.toFixed(2)}`);
  }
}

planetDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);
