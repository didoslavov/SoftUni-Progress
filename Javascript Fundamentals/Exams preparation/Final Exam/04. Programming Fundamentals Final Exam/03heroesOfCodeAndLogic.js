function heroesOfCodeAndLogic(input) {
  const initNumber = Number(input.shift());
  const players = {};

  input.splice(0, initNumber).forEach((p) => {
    const [player, hp, mp] = p.split(' ');

    players[player] = {
      hp: Number(hp),
      mp: Number(mp),
    };
  });

  let line = input.shift();

  while (line !== 'End') {
    const [command, heroName, ...params] = line.split(' - ');

    switch (command) {
      case 'CastSpell':
        const [mp, spellName] = params;
        
        if(players[heroName].mp - Number(mp) >= 0) {
            players[heroName].mp -= Number(mp);
            console.log(`${heroName} has successfully cast ${spellName} and now has ${players[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
        break;
      case 'TakeDamage':
        const [damage, attacker] = params;
        players[heroName].hp -= Number(damage);

        if (players[heroName].hp > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${players[heroName].hp} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete players[heroName];
        }
        break;
      case 'Recharge':
        const [amount] = params;

        if (players[heroName].mp + Number(amount) > 200) {
            const rechargedAmount = 200 - players[heroName].mp;
            players[heroName].mp = 200;
            console.log(`${heroName} recharged for ${rechargedAmount} MP!`);
        } else {
            players[heroName].mp += Number(amount)
            console.log(`${heroName} recharged for ${Number(amount)} MP!`);
        }
        break;
      case 'Heal':
        const [health] = params;

        if (players[heroName].hp + Number(health) > 100) {
            const healedAmount = 100 - players[heroName].hp;
            players[heroName].hp = 100;
            console.log(`${heroName} healed for ${healedAmount} HP!`);
        } else {
            players[heroName].hp += Number(health)
            console.log(`${heroName} healed for ${Number(health)} HP!`);
        }
        break;
    }

    line = input.shift();
  }

  for (const hero in players) {
    console.log(`${hero}
  HP: ${players[hero].hp}
  MP: ${players[hero].mp}`);
  }
}

heroesOfCodeAndLogic([
  '2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);
console.log('--------------------');
heroesOfCodeAndLogic([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
