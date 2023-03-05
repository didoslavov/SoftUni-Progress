function inventory(input) {
  const journal = input.shift().split(', ');
  let line = input.shift();

  while (line !== 'Craft!') {
    const [command, item] = line.split(' - ');

    switch (command) {
      case 'Collect':
        if (journal.includes(item)) {
            line = input.shift();
            continue;
        }
        journal.push(item);
        break;
      case 'Drop':
        if (!journal.includes(item)) {
            line = input.shift();
            continue;
        }
        const dropIndex = journal.indexOf(item);
        journal.splice(dropIndex, 1);
        break;
      case 'Combine Items':
        const [oldItem, newItem] = item.split(':');
        if (!journal.includes(oldItem)) {
            line = input.shift();
            continue;
        }
        const oldItemIndex = journal.indexOf(oldItem) + 1;
        journal.splice(oldItemIndex, 0, newItem);
        break;
      case 'Renew':
        if (!journal.includes(item)) {
            line = input.shift();
            continue;
        }
        const indexRenew = journal.indexOf(item);
        const splicedItem = journal.splice(indexRenew, 1).join('');
        journal.push(splicedItem);
        break;
    }
    line = input.shift();
  }
  console.log(journal.join(', '));
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
console.log('-----------------');
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!',
]);
