function smallShop(input) {

    let productName = input[0];
    let townName = input[1];
    let productQty = Number(input[2]);

    let totalPrice = 0;

    if (townName == "Sofia") {
        if (productName == "coffee") {
            totalPrice = productQty * 0.50;
        } else if (productName == "water") {
            totalPrice = productQty * 0.80;
        } else if (productName == "beer") {
            totalPrice = productQty * 1.20;
        } else if (productName == "sweets") {
            totalPrice = productQty * 1.45;
        } else if (productName == "peanuts") {
            totalPrice = productQty * 1.60;
        }
    } else if (townName == "Plovdiv") {
        if (productName == "coffee") {
            totalPrice = productQty * 0.40;
        } else if (productName == "water") {
            totalPrice = productQty * 0.70;
        } else if (productName == "beer") {
            totalPrice = productQty * 1.15;
        } else if (productName == "sweets") {
            totalPrice = productQty * 1.30;
        } else if (productName == "peanuts") {
            totalPrice = productQty * 1.50;
        }
    } else if (townName == "Varna") {
        if (productName == "coffee") {
            totalPrice = productQty * 0.45;
        } else if (productName == "water") {
            totalPrice = productQty * 0.70;
        } else if (productName == "beer") {
            totalPrice = productQty * 1.10;
        } else if (productName == "sweets") {
            totalPrice = productQty * 1.35;
        } else if (productName == "peanuts") {
            totalPrice = productQty * 1.55;
        }
    }
    console.log(totalPrice.toFixed(2));

}

smallShop(["beer",
"Sofia",
"6"]);