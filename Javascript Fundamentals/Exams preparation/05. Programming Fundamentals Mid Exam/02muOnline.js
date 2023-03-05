function muOnline(dungeons) {
    let health = 100;
    let bitcoins = 0;
    const dungeon = dungeons.split('|');
    let counter = 0;

    for (const room of dungeon) {
        const command = room.split(' ')[0];
        const commandValue = Number(room.split(' ')[1]);

        if (command === 'potion') {
            if (health + commandValue <= 100) {
                health += commandValue;
                counter++;
                console.log(`You healed for ${commandValue} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                counter++;
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command === 'chest') {
            counter++;
            bitcoins += commandValue;
            console.log(`You found ${commandValue} bitcoins.`);
        } else {
            health -= commandValue;
            if (health > 0) {
                counter++;
                console.log(`You slayed ${command}.`);
            } else {
                counter++;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counter}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");