function hotelRoom(input) {

    let month = input[0];
    let totalStay = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = totalStay * 50;
            apartmentPrice = totalStay * 65;
            if (totalStay > 7 && totalStay <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (totalStay > 14) {
                studioPrice = studioPrice * 0.70;
            }
            break;
        case "June":
        case "September":
            studioPrice = totalStay * 75.20;
            apartmentPrice = totalStay * 68.70;
            if (totalStay > 14) {
                studioPrice = studioPrice * 0.80;
            }
            break;
        case "July":
        case "August":
            studioPrice = totalStay * 76;
            apartmentPrice = totalStay * 77;
            break;
    }
    if (totalStay > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["June",
    "14"]);