function movingTarget(input) {
  let field = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let currentLine = input.shift();

  while (currentLine !== 'End') {
    let commandArray = currentLine.split(' ');
    let command = commandArray[0];
    let index = Number(commandArray[1]);
    let isInRange = false;

    if (index >= 0 && index < field.length) {
      isInRange = true;
    }

    switch (command) {
      case 'Shoot':
        let power = Number(commandArray[2]);
        if (isInRange) {
          field[index] -= power;
        }
        if (field[index] <= 0){
          field.splice(index, 1);
        }
        break;
      case 'Add':
        let newTarget = Number(commandArray[2]);

        if (isInRange){
          field.splice(index, 0, newTarget);;
        } else {
          console.log('Invalid placement!');
        }
        break;
      case 'Strike':
        let radius = Number(commandArray[2]);

        if (index - radius >= 0 && index + radius < field.length) {
          isInRange = true;
        } else {
          isInRange = false;
        }

        if (isInRange) {
          field.splice(index - radius, radius * 2 + 1);
        } else {
          console.log('Strike missed!');
        }
        break;
    }
    currentLine = input.shift();
  }
  console.log(field.join('|'));
}

movingTarget(["1 2 3 4 5",
"Strike 2 2",
"End"]);
