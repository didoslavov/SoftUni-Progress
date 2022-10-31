function coins(input) {
  let change = Number(input[0]);
  let changeInCoins = Math.floor(change * 100);
  let coinsCounter = 0;

  while (changeInCoins > 0) {
    if (changeInCoins >= 200) {
      changeInCoins -= 200;
      coinsCounter++;
    } else if (changeInCoins >= 100) {
      changeInCoins -= 100;
      coinsCounter++;
    } else if (changeInCoins >= 50) {
      changeInCoins -= 50;
      coinsCounter++;
    } else if (changeInCoins >= 20) {
      changeInCoins -= 20;
      coinsCounter++;
    } else if (changeInCoins >= 10) {
      changeInCoins -= 10;
      coinsCounter++;
    } else if (changeInCoins >= 5) {
      changeInCoins -= 5;
      coinsCounter++;
    } else if (changeInCoins >= 2) {
      changeInCoins -= 2;
      coinsCounter++;
    } else if (changeInCoins >= 1) {
      changeInCoins -= 1;
      coinsCounter++;
    }
  }
  console.log(coinsCounter);
}

coins(["2.73"]);
