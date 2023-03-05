function shootingTargets(input) {
  let field = input.shift().split(' ').map(Number);
  let targetsShot = 0;
  let command = input.shift();

  while (command !== 'End') {
    let isInRange = false;
    let index = Number(command);

    if (index >= 0 && index < field.length) {
      isInRange = true;
    }

    if (field[index] !== -1 && isInRange) {
      for (let i = 0; i < field.length; i++) {
        let currentEnemy = field[i];

        if (field[index] < currentEnemy && index !== i && field[i] !== -1) {
          field[i] = currentEnemy - field[index];
        } else if (
          field[index] >= currentEnemy &&
          index !== i &&
          field[i] !== -1
        ) {
          field[i] = currentEnemy + field[index];
        }
      }
      field[index] = -1;
      targetsShot++;
    }
    command = input.shift();
  }
  console.log(`Shot targets: ${targetsShot} -> ${field.join(' ')}`);
}

shootingTargets(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);
