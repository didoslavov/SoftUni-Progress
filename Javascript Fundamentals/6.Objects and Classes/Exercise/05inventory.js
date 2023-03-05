function heroesInfo(heroesInput) {
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  const heroesArray = [];

  for (const line of heroesInput) {
    const currentHero = line.split(' / ');
    const heroName = currentHero.shift();
    const heroLevel = Number(currentHero.shift());
    const heroItems = currentHero.shift();
    const hero = new Hero(heroName, heroLevel, heroItems);

    heroesArray.push(hero);
  }

  heroesArray.sort((a, b) => a.level - b.level);

  for (const hero of heroesArray) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

heroesInfo([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
