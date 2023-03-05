function memoryGame(input) {
  let sequance = input.shift().split(' ');
  let movesCount = 0;
  let command = input.shift();
  let bounds = false;

  while (command !== 'end') {
    let indexes = command.split(' ');
    movesCount++;
    let firstIndex = Number(indexes[0]);
    let secondIndex = Number(indexes[1]);

    if (firstIndex < 0 || firstIndex > sequance.length - 1) {
      bounds = false;
    }
    if (secondIndex < 0 || secondIndex > sequance.length - 1) {
      bounds = false;
    }
    if (firstIndex >= 0 && firstIndex <= sequance.length - 1) {
      if (secondIndex >= 0 && secondIndex <= sequance.length - 1) {
        bounds = true;
      }
    }

    if (
      sequance[firstIndex] === sequance[secondIndex] &&
      firstIndex !== secondIndex &&
      bounds
    ) {
      console.log(
        `Congrats! You have found matching elements - ${sequance[firstIndex]}!`
      );
      if (firstIndex > secondIndex) {
        sequance.splice(firstIndex, 1);
        sequance.splice(secondIndex, 1);
      } else if (secondIndex > firstIndex) {
        sequance.splice(secondIndex, 1);
        sequance.splice(firstIndex, 1);
      }
    } else if (sequance[firstIndex] !== sequance[secondIndex] && bounds) {
      console.log(`Try again!`);
    } else if (firstIndex === secondIndex || bounds === false) {
      let startingIndex = sequance.length / 2;
      let newElements = `-${movesCount}a`;
      sequance.splice(startingIndex, 0, newElements, newElements);
      console.log(`Invalid input! Adding additional elements to the board`);
    }

    if (sequance.length === 0) {
      console.log(`You have won in ${movesCount} turns!`);
      break;
    }
    command = input.shift();
  }
  if (sequance.length > 0) {
    console.log(`Sorry you lose :(`);
    console.log(sequance.join(' '));
  }
}

memoryGame(['1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end']);
