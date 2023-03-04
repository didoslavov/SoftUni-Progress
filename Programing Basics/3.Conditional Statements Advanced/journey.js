function jurney(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let moneySpent = 0;
    let placeToStay;
    let destination;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                destination = "Bulgaria";
                placeToStay = "Camp";
                moneySpent = budget * 0.30;
            } else if (budget <= 1000) {
                destination = "Balkans";
                placeToStay = "Camp";
                moneySpent = budget * 0.40;
            } else if (budget > 1000) {
                destination = "Europe";
                placeToStay = "Hotel";
                moneySpent = budget * 0.90;
            }
            break;
        case "winter":
            if (budget <= 100) {
                destination = "Bulgaria";
                placeToStay = "Hotel";
                moneySpent = budget * 0.70;
            } else if (budget <= 1000) {
                destination = "Balkans";
                placeToStay = "Hotel";
                moneySpent = budget * 0.80;
            } else if (budget > 1000) {
                destination = "Europe";
                placeToStay = "Hotel";
                moneySpent = budget * 0.90;
            }
            break;
    }
        console.log(`Somewhere in ${destination}`);
        console.log(`${placeToStay} - ${moneySpent.toFixed(2)}`);

}

    jurney(["1500", "summer"]);