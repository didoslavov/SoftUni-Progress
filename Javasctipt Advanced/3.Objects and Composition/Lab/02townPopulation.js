function townPopulation(input) {
    const towns = {};

    for (const townInfo of input) {
        const [townName, population] = townInfo.split(' <-> ');

        if (towns.hasOwnProperty(townName)) {
            towns[townName] += Number(population);
            continue;
        }

        towns[townName] = Number(population);
    }
    
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
console.log('--------------');
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);