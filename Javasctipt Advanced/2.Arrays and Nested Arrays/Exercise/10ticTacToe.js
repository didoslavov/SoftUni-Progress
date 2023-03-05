function ticTacToe(input) {
  const dashBoard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  const firstPlayer = 'X';
  const secondPlayer = 'O';
  let currentPlayer = firstPlayer;
  let win = false;
  const hasFreeSpaces = (matrix) => matrix.some(arr => arr.some(val => val === false));

  for (let i = 0; i < input.length && hasFreeSpaces(dashBoard); i++) {
    const [x, y] = input[i].split(' ').map((x) => Number(x));

    if (dashBoard[x][y] !== false) {
      console.log('This place is already taken. Please choose another!');
      continue;
    }

    dashBoard[x][y] = currentPlayer;

    if (playerWon(currentPlayer)) {
      win = true;
      break;
    }
    currentPlayer = currentPlayer === firstPlayer ? secondPlayer : firstPlayer;
  }

  if (!win) {
    console.log('The game ended! Nobody wins :(');
  } else {
    console.log(`Player ${currentPlayer} wins!`);
  }
  dashBoard.forEach((row) => {
    console.log(row.join('\t'));
  });

  function playerWon(player) {
    if (
      dashBoard[0][0] === player &&
      dashBoard[0][1] === player &&
      dashBoard[0][2] === player
    )
      return true;
    if (
      dashBoard[1][0] === player &&
      dashBoard[1][1] === player &&
      dashBoard[1][2] === player
    )
      return true;
    if (
      dashBoard[2][0] === player &&
      dashBoard[2][1] === player &&
      dashBoard[2][2] === player
    )
      return true;

    if (
      dashBoard[0][0] === player &&
      dashBoard[1][0] === player &&
      dashBoard[2][0] === player
    )
      return true;
    if (
      dashBoard[0][1] === player &&
      dashBoard[1][1] === player &&
      dashBoard[2][1] === player
    )
      return true;
    if (
      dashBoard[0][2] === player &&
      dashBoard[1][2] === player &&
      dashBoard[2][2] === player
    )
      return true;

    if (
      dashBoard[0][0] === player &&
      dashBoard[1][1] === player &&
      dashBoard[2][2] === player
    )
      return true;
    if (
      dashBoard[2][0] === player &&
      dashBoard[1][1] === player &&
      dashBoard[0][2] === player
    )
      return true;
  }
}

ticTacToe([
  '0 1',
  '0 0',
  '0 2',
  '2 0',
  '1 0',
  '1 2',
  '1 1',
  '2 1',
  '2 2',
  '0 0',
]);
