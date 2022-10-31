function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let location;
    let placeType;
    let price;

    if (budget <= 1000) {
        placeType = "Camp"
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.45;
                    break;
        }
    } else if (1000 < budget && budget <= 3000) {
        placeType = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.80;
                break;
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.60;
                    break;
        }
    } else {
        placeType = "Hotel";
        switch (season) {
            case "Summer":
                location = "Alaska"
                price = budget * 0.90;
                break;
                case "Winter":
                    location = "Morocco";
                    price = budget * 0.90;
                    break;
        }
    }

    console.log(`${location} - ${placeType} - ${price.toFixed(2)}`);

}

vacation(["799.50", "Winter"])