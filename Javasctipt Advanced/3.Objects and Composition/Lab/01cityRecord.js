function cityRecord(name, population, treasury) {
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

console.log(cityRecord('Tortuga',
7000,
15000));
console.log('------------');
console.log(cityRecord('Santo Domingo',
12000,
23500));