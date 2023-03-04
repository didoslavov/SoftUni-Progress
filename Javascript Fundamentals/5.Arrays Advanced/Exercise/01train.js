function train(array) {
  let trainComposition = array.shift().split(" ").map(Number);
  let wagonsCapacity = Number(array.shift());
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let command = array[i].split(" ");

    if (command.includes("Add")) {
      trainComposition.push(command[1]);
    } else {
      for (let j = 0; j < trainComposition.length; j++) {
        let currentWagonPassangers = Number(trainComposition[j]);

        if (currentWagonPassangers + Number(command[0]) <= wagonsCapacity) {
          trainComposition[j] += Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(trainComposition.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
