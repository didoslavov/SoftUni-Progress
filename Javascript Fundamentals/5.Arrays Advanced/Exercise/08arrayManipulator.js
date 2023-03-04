function arrayManipulator(numbers, commands) {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    switch (command[0]) {
      case "add":
        let addIndex = Number(command[1]);
        let elementToAdd = Number(command[2]);
        numbers.splice(addIndex, 0, elementToAdd);
        break;
      case "addMany":
        let addManyIndex = Number(command[1]);
        command.splice(0, 2);
        let numbersToAdd = command.map(Number);
        numbers.splice(addManyIndex, 0, ...numbersToAdd);
        break;
      case "contains":
        let checkElement = Number(command[1]);
        console.log(numbers.indexOf(checkElement));
        break;
      case "remove":
        let removeIndex = Number(command[1]);
        numbers.splice(removeIndex, 1);
        break;
      case "shift":
        let shiftedCount = Number(command[1]);
        for (let l = 0; l < shiftedCount; l++) {
            let shiftedElement = numbers.shift();
            numbers.push(shiftedElement);
        }
        break;
      case "sumPairs":
        let sumArray = [];
        if (numbers.length % 2 !== 0) {
          numbers.push(0);
        } 
          for (let m = 0; m < numbers.length; m += 2) {
            let sumPair = Number(numbers[m]) + Number(numbers[m + 1]);
            sumArray.push(sumPair);
          }
        numbers = sumArray;
        break;
      case "print":
        console.log("[ " + numbers.join(", ") + " ]");
        break;
    }
  }
}

arrayManipulator([1, 2, 3, 4, 5],
  ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);
