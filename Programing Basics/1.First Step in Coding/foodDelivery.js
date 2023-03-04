function foodDelivery(input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let veggieMenusPrice = veggieMenus * 8.15;
    let allMenusPrice = chickenMenusPrice + fishMenusPrice + veggieMenusPrice;
    let dessertPrice = allMenusPrice * 0.20;

    let finalSum = allMenusPrice + dessertPrice + 2.50;


    console.log(finalSum);
}

foodDelivery(["2", "4", "3"]);