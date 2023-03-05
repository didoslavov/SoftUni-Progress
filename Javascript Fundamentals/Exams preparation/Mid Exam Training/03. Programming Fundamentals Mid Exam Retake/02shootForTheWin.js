function shootForTheWin(input) {
  const targets = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let count = 0;
  let line = input.shift();

  while (line !== 'End') {
    const index = Number(line);
    const currentPower = targets[index];
    const isValid = index >= 0 && index < targets.length;
    if (!isValid) {
        line = input.shift();
        continue;
    }
    if (targets[index] !== -1) {
      targets[index] = -1;
      count++;
    }
    for (let i = 0; i < targets.length; i++) {
      if (targets[i] === -1) {
        continue;
      } else {
        if (currentPower < targets[i]) {
          targets[i] -= currentPower;
        } else {
          targets[i] += currentPower;
        }
      }
    }

    line = input.shift();
  }

  return `Shot targets: ${count} -> ${targets.join(' ')}`;
}

console.log(shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']));
console.log('----------------');
console.log(shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']));
