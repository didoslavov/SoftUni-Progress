function darkestDungeon(array) {
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
  
    let dungeon = array[0].split("|");
    for (let i = 0; i < dungeon.length; i++) {
      let currentDungeon = dungeon[i].split(" ");
      let command = currentDungeon[0];
      let number = Number(currentDungeon[1]);
      roomCounter++;
  
      if (command === "potion") {
        if (health + number >= 100) {
          number = 100 - health;
          console.log(`You healed for ${number} hp.`);
          health = 100;
        } else {
          health += number;
          console.log(`You healed for ${number} hp.`);
        }
        console.log(`Current health: ${health} hp.`);
      } else if (command === "chest") {
        coins += number;
        console.log(`You found ${number} coins.`);
      } else {
        health -= number;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${roomCounter}`);
          return;
        }
      }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }