function heroicInventory(input) {
    const heroes = [];

    for (const heroInfo of input) {
        let [name, level, ...items] = heroInfo.split(' / ');

        if (items.length === 0) {
            items = items;
        } else {
            items = items = items.join('').split(', ');
        }

        const hero = {
            name: name,
            level: Number(level),
            items: items,
        }
        
        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
console.log('--------------');
console.log(heroicInventory(['Jake / 1000']));
