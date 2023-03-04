function arrayManipulations(commands) {
  let mutatedArray = commands[0].split(" ");
  const commandLength = commands.length;

  for (let i = 1; i < commandLength; i++) {
    const currentCommand = commands[i].split(" ");
    const comand = currentCommand[0];
    const comandNumber = Number(currentCommand[1]);
    const insertIndex = currentCommand[2];

    switch (comand) {
      case "Add":
        mutatedArray.push(String(comandNumber));
        break;
      case "Remove":
        mutatedArray = mutatedArray.filter((num) => num != comandNumber);
        break;
      case "RemoveAt":
        mutatedArray.splice(comandNumber, 1);
        break;
      case "Insert":
        mutatedArray.splice(insertIndex, 0, comandNumber);
        break;
      default:
        break;
    }
  }
  console.log(mutatedArray.join(' '));
}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);
