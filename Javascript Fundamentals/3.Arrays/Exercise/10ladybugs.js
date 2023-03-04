function flyingLadybugs(input) {
  // Field preparation:
  let fieldSize = [];
  let startingBugs = input[1].split(' ').map(Number);

  for (let i = 0; i < input[0]; i++) {
    fieldSize.push(0);
    for (let j = 0; j < startingBugs.length; j++) {
      if (i === Number(startingBugs[j])) {
        fieldSize[i] = 1;
      }
    }
  }
 
  // Getting commands and make ladybugs to fly around:
  for (let i = 2; i < input.length; i++) {
    let command = input[i].split(' ');
    let ladybugPosition = Number(command[0]);
    let direction = command[1];
    let jumps = Number(command[2]);

    // Check if there's ladybug on given index:
    if (
      fieldSize[ladybugPosition] === 0 ||
      ladybugPosition < 0 ||
      ladybugPosition > fieldSize.length - 1
    ) {
      continue;
    }

    fieldSize[ladybugPosition] = 0;

    switch (direction) {
      // Logic for ladybug flying to the right side of the field:
      case 'right':
        ladybugPosition += jumps;

        while (
          ladybugPosition < fieldSize.length &&
          fieldSize[ladybugPosition] === 1
        ) {
          ladybugPosition += jumps;
        }
        if (ladybugPosition < fieldSize.length) {
          fieldSize[ladybugPosition] = 1;
        }
        break;
      // Logic for ladybug flying to the right side of the field:
      case 'left':
        ladybugPosition -= jumps;

        while (ladybugPosition >= 0 && fieldSize[ladybugPosition] === 1) {
          ladybugPosition -= jumps;
        }
        if (ladybugPosition >= 0) {
          fieldSize[ladybugPosition] = 1;
        }
    }
  }
  console.log(fieldSize.join(' '));
}

flyingLadybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);
