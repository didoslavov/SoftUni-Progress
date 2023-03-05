function diagonalAttack(string) {
    const matrix = [];
    let leftRightDiag = 0;
    let rightLeftDiag = 0;
  
    for (let i = 0; i < string.length; i++) {
      matrix.push(
        string[i].split(' ').map((string) => {
          return Number(string);
        })
      );
    }
    // Diagonals sum:
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (i === j) {
          leftRightDiag += matrix[i][j];
        }
        if (i + j === matrix.length - 1) {
          rightLeftDiag += matrix[i][j];
        }
      }
    }
    // Checking diagonal sums equality and printing the results:
  
    if (leftRightDiag === rightLeftDiag) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (i === j || i + j === matrix.length - 1) {
            continue;
          } else {
            matrix[i][j] = rightLeftDiag;
          }
        }
      }
      console.log(matrix.map((arr) => arr.join(' ')).join('\n'));
    } else {
      console.log(matrix.map((arr) => arr.join(' ')).join('\n'));
    }
  }
  
  diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);
  