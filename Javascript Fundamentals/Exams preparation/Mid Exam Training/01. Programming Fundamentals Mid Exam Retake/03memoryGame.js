function memoryGame(input) {
  const sequance = input.shift().split(' ');
  let line = input.shift();
  let moves = 0;

  while (line !== 'end') {
    line = line.split(' ').map((x) => Number(x));

    const firstIndex = line[0];
    const secondIndex = line[1];
    const isValid =
      firstIndex >= 0 &&
      firstIndex < sequance.length &&
      secondIndex >= 0 &&
      secondIndex < sequance.length &&
      firstIndex !== secondIndex;

    if (!isValid) {
      console.log('Invalid input! Adding additional elements to the board');
      moves++;
      const middleOfSequance = sequance.length / 2;
      sequance.splice(middleOfSequance, 0, `-${moves}a`, `-${moves}a`);
    } else if (sequance[firstIndex] === sequance[secondIndex]) {
      console.log(
        `Congrats! You have found matching elements - ${sequance[firstIndex]}!`
      );
      sequance.splice(Math.max(firstIndex, secondIndex), 1);
      sequance.splice(Math.min(firstIndex, secondIndex), 1);
      moves++;
    } else {
      console.log('Try again!');
    }

    if (sequance.length < 1) {
        return `You have won in ${moves} turns!`;
      }

    line = input.shift();
  }

  return `Sorry you lose :(
${sequance.join(' ')}`;
}

console.log(
  memoryGame(['1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end'])
);
console.log('-----------');
console.log(memoryGame(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']));
console.log('-----------');
console.log(memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']));
