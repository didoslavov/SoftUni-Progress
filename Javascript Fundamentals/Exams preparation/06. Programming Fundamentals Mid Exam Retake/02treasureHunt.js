function treasureChest(pirateInput) {
  const treasureChest = pirateInput.shift().split('|');
  
  for (let commandArr of pirateInput) {
      let commandLine = commandArr.split(' ')
      let command = commandLine.shift();

      if (command === 'Yohoho!') {
        break;
      }

    switch (command) {
      case 'Loot':
        for (let loot of commandLine) {
            if (!treasureChest.includes(loot)) {
                treasureChest.unshift(loot);
            }
        }
        break;
      case 'Drop':
        const index = Number(commandLine[0]);
            
        if (index > 0 && index < treasureChest.length) {
            let droppedItem = treasureChest.splice(index, 1);
            treasureChest.push(droppedItem.join());
        }
        break;
      case 'Steal':
        const itemCount = Number(commandLine[0]);
        const stolenItems = [];
        
        for (let i = 0; i < itemCount; i++) {
             stolenItems.unshift(treasureChest.pop());
             if (treasureChest.length === 0) {
                break;
             }

        }
        
        console.log(stolenItems.join(', '));
        break;
    }
  }

    if (treasureChest.length >   0) {
        let sum = 0;

        for (const loot of treasureChest) {
            sum += loot.length;
        }
        let averageGain = sum / treasureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureChest((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]));
