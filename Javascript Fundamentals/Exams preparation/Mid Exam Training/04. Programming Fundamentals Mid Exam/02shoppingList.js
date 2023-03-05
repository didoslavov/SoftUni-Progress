function shoppingList(input) {
  const list = input.shift().split('!');
  let line = input.shift();

  while (line !== 'Go Shopping!') {
    const [command, item, newItem] = line.split(' ');

    switch (command) {
      case 'Urgent':
        if (!list.includes(item)) {
          list.unshift(item);
        }
        break;
      case 'Unnecessary':
        if (list.includes(item)) {
          const unnecessaryIndex = list.indexOf(item);
          list.splice(unnecessaryIndex, 1);
        }
        break;
      case 'Correct':
        if (list.includes(item)) {
          const correctIndex = list.indexOf(item);
          list.splice(correctIndex, 1, newItem);
        }
        break;
      case 'Rearrange':
        if (list.includes(item)) {
          const rearrangeIndex = list.indexOf(item);
          const grocery = list.splice(rearrangeIndex, 1).join('');
          list.push(grocery);
        }
        break;
    }
    line = input.shift();
  }

  console.log(list.join(', '));
}

shoppingList([
  'Tomatoes!Potatoes!Bread',
  'Unnecessary Milk',
  'Urgent Tomatoes',
  'Go Shopping!',
]);
console.log('-------------------');
shoppingList([
  'Milk!Pepper!Salt!Water!Banana',
  'Urgent Salt',
  'Unnecessary Grapes',
  'Correct Pepper Onion',
  'Rearrange Grapes',
  'Correct Tomatoes Potatoes',
  'Go Shopping!',
]);
