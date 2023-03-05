function inventory(journal) {
  const inventory = [...journal.shift().split(', ')];

  for (let command of journal) {
    command = [...command.split(' - ')];
    let item = command[1];

    if (command[0] === 'Craft!') {
      console.log(inventory.join(', '));
      break;
    }

    switch (command[0]) {
      case 'Collect':
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case 'Drop':
        if (inventory.includes(item)) {
          const itemIndex = inventory.indexOf(item);
          inventory.splice(itemIndex, 1);
        }
        break;
      case 'Combine Items':
        let oldItem = command[1].split(':')[0];
        let newItem = command[1].split(':')[1];

        if (inventory.includes(oldItem)) {
          const itemIndex = inventory.indexOf(oldItem);
          inventory.splice(itemIndex + 1, 0, newItem);
        }
        break;
      case 'Renew':
        if (inventory.includes(item)) {
          const itemIndex = inventory.indexOf(item);
          const renewedItem = inventory.splice(itemIndex, 1)
          inventory.push(item);
        }
        break;
    }
  }
}

inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!',
]);
