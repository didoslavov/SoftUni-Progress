function magicMatrices(square) {
  const squareSidesLength = square.length;
  let isMagic = true;
  const initRowSum = square[0].reduce((a,b) => a + b);
  let initColSum = 0;
        square.forEach(row => {initColSum += row[0]});

  for (let i = 0; i < squareSidesLength; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < squareSidesLength; j++) {
      rowSum += square[i][j];
      colSum += square[j][i];
}
if (rowSum !== initRowSum || colSum !== initColSum) {
    isMagic = false;
}
}
  console.log(isMagic);
}

magicMatrices([[4, 5,6],
    [6, 5,4],
    [5, 5,5]]);

