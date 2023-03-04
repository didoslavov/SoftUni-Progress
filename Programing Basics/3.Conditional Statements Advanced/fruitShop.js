function fruitShop(input) {

    let fruit = input[0];
    let weekDay = input[1];
    let fruitQty = Number(input[2]);
    let totalPrice = 0; 

    switch (weekDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                totalPrice = fruitQty * 2.50;
            } else if (fruit === "apple") {
                totalPrice = fruitQty * 1.20;
            } else if (fruit === "orange") {
                totalPrice = fruitQty * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = fruitQty * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = fruitQty * 2.70;
            } else if (fruit === "pineapple") {
                totalPrice = fruitQty * 5.50;
            } else if (fruit === "grapes") {
                totalPrice = fruitQty * 3.85;
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                totalPrice = fruitQty * 2.70;
            } else if (fruit === "apple") {
                totalPrice = fruitQty * 1.25;
            } else if (fruit === "orange") {
                totalPrice = fruitQty * 0.90;
            } else if (fruit === "grapefruit") {
                totalPrice = fruitQty * 1.60;
            } else if (fruit === "kiwi") {
                totalPrice = fruitQty * 3.00;
            } else if (fruit === "pineapple") {
                totalPrice = fruitQty * 5.60;
            } else if (fruit === "grapes") {
                totalPrice = fruitQty * 4.20;
            }
            break;
        }




    if ((weekDay !== "Monday" && weekDay !== "Tuesday" && weekDay !== "Wednesday" && weekDay !== "Thursday" && weekDay !== "Friday" && weekDay !== "Saturday" && weekDay !== "Sunday") || (fruit !== "banana" && fruit !== "apple" && fruit !== "orange" && fruit !== "grapefruit" && fruit !== "kiwi" && fruit !== "pineapple" && fruit !== "grapes")) {
        console.log("error");
    } else {
        console.log(totalPrice.toFixed(2));
    }

}




fruitShop(["pineapple",
"Sunday",
"1.65"]);