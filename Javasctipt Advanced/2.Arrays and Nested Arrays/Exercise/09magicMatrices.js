function magicMatrix(matrix) {
  const rows = matrix.map(row => row.reduce((acc, y) => acc + y));
  const cols = matrix.reduce((colA, colB) => colA.map((num, index) => colB[index] + num));
  const areEqual = arr => arr.every(x => x === arr[0]);

  return areEqual(rows) && String(rows) === String(cols);
}

console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log('----------');
console.log(
  magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log('-----------');
console.log(
  magicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
