function travelTime(input) {
  const countries = {};

  input.forEach((countryInput) => {
    const town = {};
    const countryInfo = countryInput.split(' > ');
    const countryName = countryInfo[0];
    const townName = countryInfo[1];
    const value = Number(countryInfo[2]);

    if (!countries.hasOwnProperty(countryName)) {
      town[townName] = value;
      countries[countryName] = town;
    } else {
      if (!countries[countryName].hasOwnProperty(townName)) {
        town[townName] = value;
        countries[countryName][townName] = value;
      } else {
        const currentValue = countries[countryName][townName];
        countries[countryName][townName] = value;
        if (currentValue <= countries[countryName][townName]) {
          countries[countryName][townName] = currentValue;
        }
      }
    }
  });

  const sortedCountries = Object.entries(countries).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sortedCountries.forEach((element) => {
    const townSorted = Object.entries(element[1])
      .sort((a, b) => a[1] - b[1])
      .map((town) => town.join(' -> '));
    console.log(`${element[0]} -> ${townSorted.join(' ')}`);
  });
}
travelTime([
  'Bulgaria > Sofia > 100',
  'Bulgaria > Sofia > 500',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200',
]);
