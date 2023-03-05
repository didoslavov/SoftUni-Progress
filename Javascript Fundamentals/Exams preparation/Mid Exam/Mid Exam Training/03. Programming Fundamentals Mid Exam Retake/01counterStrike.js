function counterStrike(input) {
  let energy = Number(input.shift());
  let line = input.shift();
  let wonBattles = 0;

  while (line !== 'End of battle') {
    const distance = Number(line);

    if (energy - distance >= 0) {
      wonBattles++;
      energy -= distance;
    } else {
      return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`;
    }

    if (wonBattles % 3 === 0) {
      energy += wonBattles;
    }
    line = input.shift();
  }

  return `Won battles: ${wonBattles}. Energy left: ${energy}`;
}

console.log(
  counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10'])
);
console.log('-------------------');
console.log(counterStrike(['200', '54', '14', '28', '13', 'End of battle']));
