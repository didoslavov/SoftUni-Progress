function gladiatorInvertory(gears) {
  let invertory = gears.shift().split(" ");
  let gearsLength = gears.length;

  for (let i = 0; i < gearsLength; i++) {
    let command = gears[i].split(" ");
    let item = command[1];

    switch (command[0]) {
      case "Buy":
        buy(invertory, item);
        break;
      case "Trash":
        trash(invertory, item);
        break;
      case "Repair":
        repair(invertory, item);
        break;
      case "Upgrade":
        upgrade(invertory, item);
        break;
    }
  }
  console.log(invertory.join(" "));

  function buy(invertory, item) {
    if (!invertory.includes(item)) {
      invertory.push(item);
    }
  }

  function trash(invertory, item) {
    if (invertory.includes(item)) {
      let index = invertory.indexOf(item);
      invertory.splice(index, 1);
    }
  }

  function repair(invertory, item) {
    if (invertory.includes(item)) {
      let index = invertory.indexOf(item);
      let repairedItem = invertory.splice(index, 1).join();
      invertory.push(repairedItem);
    }
  }

  function upgrade(invertory, item) {
    let upgrade = item.split("-");

    if (invertory.includes(upgrade[0])) {
      let index = invertory.indexOf(upgrade[0]);
      let upgradedItem = invertory[index] + ":" + upgrade[1];
      invertory.splice([index + 1], 0, upgradedItem);
    }
  }
}

gladiatorInvertory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
