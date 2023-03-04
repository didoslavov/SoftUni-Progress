function accountBalance(input) {
  let i = 0;
  let money = input[0];
  let increace = 0;

  while (money !== "NoMoreMoney") {
    let currentMoney = Number(money);
    if (money <= 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log("Increase: " + currentMoney.toFixed(2));
    increace += currentMoney;
    i++;
    money = input[i];
  }
  console.log("Total: " + increace.toFixed(2));
}

accountBalance(["120", "45.55", "-150"]);
