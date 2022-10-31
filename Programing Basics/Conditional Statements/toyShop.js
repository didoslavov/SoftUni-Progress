function toyShop(input) {

    let holidayPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlesPrice = puzzlesCount * 2.60;
    let dollsPrice = dollsCount * 3.00;
    let teddyBearsPrice = teddyBearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2.00;

    let totalToys = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;
    let totalPrice = puzzlesPrice + dollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;

    if (totalToys >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    totalPrice = totalPrice * 0.90;

    let moneyLeft = Math.abs(holidayPrice - totalPrice);
    
    if (totalPrice >= holidayPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    }



}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);