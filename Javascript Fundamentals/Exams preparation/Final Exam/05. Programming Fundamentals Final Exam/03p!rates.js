function pirates(input) {
  const cities = {};
  let city = input.shift();

  while (city !== 'Sail') {
    const [name, population, gold] = city.split('||');

    if (!cities.hasOwnProperty(name)) {
      cities[name] = {
        population: Number(population),
        gold: Number(gold),
      };
    } else {
      cities[name].population += Number(population);
      cities[name].gold += Number(gold);
    }

    city = input.shift();
  }

  let line = input.shift();

  while (line !== 'End') {
    const [command, townName, ...params] = line.split('=>');

    switch (command) {
      case 'Plunder':
        const [citizens, goldAmount] = params.map((x) => Number(x));

        cities[townName].population -= citizens;
        cities[townName].gold -= goldAmount;

        console.log(
          `${townName} plundered! ${goldAmount} gold stolen, ${citizens} citizens killed.`
        );

        if (cities[townName].population <= 0 || cities[townName].gold <= 0) {
          console.log(`${townName} has been wiped off the map!`);
          delete cities[townName];
        }
        break;
      case 'Prosper':
        const [gold] = params.map((x) => Number(x));

        if (gold < 0) {
          console.log('Gold added cannot be a negative number!');
        } else {
          cities[townName].gold += gold;
          console.log(
            `${gold} gold added to the city treasury. ${townName} now has ${cities[townName].gold} gold.`
          );
        }

        break;
    }

    line = input.shift();
  }

  const citiesCount = Object.keys(cities).length;

  if (citiesCount === 0) {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
    return;
  }

  console.log(
    `Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`
  );

  for (const city in cities) {
    console.log(
      `${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
    );
  }
}

pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);
console.log('--------------');
pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
