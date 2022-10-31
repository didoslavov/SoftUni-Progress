function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boatPrice = 0;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            if (fishermen <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (6 < fishermen && fishermen <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (fishermen > 11) {
                boatPrice = boatPrice * 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            if (fishermen <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (6 < fishermen && fishermen <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (fishermen > 11) {
                boatPrice = boatPrice * 0.75;
            }
            break;
        case "Winter":
            boatPrice = 2600;
            if (fishermen <= 6) {
                boatPrice = boatPrice * 0.90;
            } else if (6 < fishermen && fishermen <= 11) {
                boatPrice = boatPrice * 0.85;
            } else if (fishermen > 11) {
                boatPrice = boatPrice * 0.75;
            }
            break;
    }
    if (fishermen % 2 === 0 && season !== "Autumn") {
        boatPrice = boatPrice * 0.95;
    }

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3600",
    "Autumn",
    "6"]);