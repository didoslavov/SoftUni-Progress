function shoppingList(shoppingInfo) {
  let shoppingList = shoppingInfo.shift().split('!');
  let command = shoppingInfo.shift();

  while (command !== 'Go Shopping!') {
    const currentCommand = command.split(' ')[0];
    const product = command.split(' ')[1];

    switch (currentCommand) {
      case 'Urgent':
        if (!shoppingList.includes(product)) {
          shoppingList.unshift(product);
        }
        break;
      case 'Unnecessary':
        if (shoppingList.includes(product)) {
          const productIndex = shoppingList.indexOf(product);
          shoppingList.splice(productIndex, 1);
        }
        break;
      case 'Correct':
        const correctProduct = command.split(' ')[2];
        if (shoppingList.includes(product)) {
          const correctingIndex = shoppingList.indexOf(product);
          shoppingList.splice(correctingIndex, 1, correctProduct);
        }
        break;
      case 'Rearrange':
        if (shoppingList.includes(product)) {
          const reaarrangedProductIndex = shoppingList.indexOf(product);
          const rearrangedProduct = shoppingList.splice(reaarrangedProductIndex, 1);
          shoppingList.push(rearrangedProduct);
        }
        break;
    }
    command = shoppingInfo.shift();
  }
  console.log(shoppingList.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
;
