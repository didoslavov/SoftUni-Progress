function bunnyKill(bunnyInput) {
  const coordinates = bunnyInput
    .pop()
    .split(' ')
    .map((arr) => arr.split(',').map(Number));
  const matrix = bunnyInput.map((arr) => arr.split(' ').map(Number));
  console.table(matrix);
  let bunniesKilled = 0;
  let damageDealt = 0;

  for (let i = 0; i < coordinates.length; i++) {
    const x = coordinates[i][0];
    const y = coordinates[i][1];
    const bombDamage = matrix[x][y];

    if (bombDamage <= 0) {
      continue;
    }

    let startingRow = Math.max(0, x - 1);
    let endRow = Math.min(x + 1, bunnyInput.length - 1);

    for (let i = startingRow; i <= endRow; i++) {
      let startColumn = Math.max(0, y - 1);
      let endColumn = Math.min(y + 1, bunnyInput[i].length - 1);

      for (let j = startColumn; j <= endColumn; j++) {
        matrix[i][j] -= bombDamage;
      }
    }
    bunniesKilled++;
    damageDealt += bombDamage;
}

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > 0) {
          damageDealt += matrix[i][j];
          bunniesKilled++;
      }
    }
  }
//   console.log(damageDealt);
//   console.log(bunniesKilled);
}

bunnyKill(['10 10 10',
'10 10 10', 
'10 10 10',
'0,0']);
