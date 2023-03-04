function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clothsPrice = Number(input[2]);
    
    let decor = budget * 0.1;
    
    if (extrasCount > 150) {
        clothsPrice = clothsPrice * 0.90;
    } else {
        clothsPrice = clothsPrice
    }
    
    let moneyNeeded = clothsPrice * extrasCount + decor;
    let money = Math.abs(budget - moneyNeeded);

    if (moneyNeeded > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${money.toFixed(2)} leva more.`);
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"])