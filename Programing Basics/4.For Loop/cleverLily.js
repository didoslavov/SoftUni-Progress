function cleverLily(input) {
  let lilysAge = Number(input[0]);
  let washingmachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let toysCounter = 0;
  let savedMoney = 0;
  let moneyStolen = 0;
  let addMoney = 10;

  for (i = 1; i <= lilysAge; i++) {
    if (i % 2 === 0) {
      savedMoney += addMoney;
      addMoney += 10;
      moneyStolen++;
    } else {
      toysCounter++;
    }
  }

  let totalMoneyFromToys = toysCounter * toyPrice;
  let totalMoneySaved = totalMoneyFromToys + savedMoney - moneyStolen;

  if (totalMoneySaved >= washingmachinePrice) {
    console.log(`Yes! ${(totalMoneySaved - washingmachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingmachinePrice - totalMoneySaved).toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
