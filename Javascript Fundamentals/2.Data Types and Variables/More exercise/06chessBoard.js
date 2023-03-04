function chessBoard(rows) {
  console.log('<div class="chessboard">');

  let currentSquareColor = 'black';
  let priviousSquareColor = '';

  for (let i = 1; i <= rows; i++) {
    console.log('  <div>');

    for (let j = 1; j <= rows; j++) {
      console.log(`    <span class="${currentSquareColor}"></span>`);

      priviousSquareColor = currentSquareColor;
      currentSquareColor = priviousSquareColor === 'black' ? 'white' : 'black';
    }

    console.log('  </div>');

    if (rows % 2 === 0) {
      priviousSquareColor = currentSquareColor;
      currentSquareColor = priviousSquareColor === 'black' ? 'white' : 'black';
    }
  }
  console.log('</div>');
}

chessBoard(3);
