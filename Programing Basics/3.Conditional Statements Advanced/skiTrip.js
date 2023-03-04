function skiTrip(input) {

    let daysToStay = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];
    let nights = daysToStay -1;
    let totalPrice = 0;

    switch (roomType) {
        case "room for one person":
            totalPrice = nights * 18;
            break;
        case "apartment":
            totalPrice = nights * 25;
            if (nights < 10) {
                totalPrice = totalPrice * 0.70;
            } else if (10 <= nights && nights < 15) {
                totalPrice = totalPrice * 0.65;
            } else if (nights >= 15){
                totalPrice = totalPrice * 0.50;
            }
            break;
        case "president apartment":
            totalPrice = nights * 35;
            if (nights < 10) {
                totalPrice = totalPrice * 0.90;
            } else if (10 >= nights && nights < 15) {
                totalPrice = totalPrice * 0.85;
            } else if (nights >= 15) {
                totalPrice = totalPrice * 0.80;
            }
            break;
    }
    if (feedback === "positive") {
        totalPrice = totalPrice * 1.25;
    } else {
        totalPrice = totalPrice * 0.90;
    }

    console.log(totalPrice.toFixed(2));

}

skiTrip(["30",
"president apartment",
"negative"]);