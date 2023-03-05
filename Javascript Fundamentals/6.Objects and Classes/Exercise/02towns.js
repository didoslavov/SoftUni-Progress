function towns(townsInput) {
  class Town {
    constructor(townName, latitude, longitude) {
      this.name = townName;
      this.latitude = latitude.toFixed(2);
      this.longitude = longitude.toFixed(2);
    }
  }

  for (const currentTown of townsInput) {
    const townInfo = currentTown.split(' | ');
    const townName = townInfo.shift();
    const latitude = Number(townInfo.shift());
    const longitude = Number(townInfo.shift());
    const town = new Town(townName, latitude, longitude);

    console.log(
      `{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`
    );
  }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
