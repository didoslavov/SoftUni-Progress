function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  const dungeons = input.split('|');
  let bestRoom = 0;

  for (let i = 0; i < dungeons.length; i++) {
    let [command, value] = dungeons[i].split(' ');
    value = Number(value);

    switch (command) {
      case 'potion':
        health = potion(value, health);
        console.log(`Current health: ${health} hp.`);
        break;
      case 'chest':
        bitcoins = coins(value, bitcoins);
        break;
      default:
        [bestRoom, health] = figth(command, value, health, i);
        if (health <= 0) {
            console.log(`Best room: ${bestRoom}`);
          return;
        }
        break;
    }
  }
  if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }

  function potion(value, health) {
    if (health + value > 100) {
        console.log(`You healed for ${(100 - health)} hp.`);
        health = 100;
    } else {
      console.log(`You healed for ${value} hp.`);
      health += value;
    }
    return health;
  }

  function coins(value, coins) {
    coins += value;
    console.log(`You found ${value} bitcoins.`);
    return coins;
  }

  function figth(monster, power, health, roomCount) {
    health -= power;

    if (health > 0) {
      console.log(`You slayed ${monster}.`);
    } else {
      console.log(`You died! Killed by ${monster}.`);
    }
    return [roomCount+1, health];
  }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
console.log('----------------------');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
