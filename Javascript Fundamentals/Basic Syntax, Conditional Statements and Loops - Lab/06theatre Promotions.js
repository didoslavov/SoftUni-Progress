function theatrePromotions(day, age) {
    let dayType = day;
    let clientAge = age;
    let ticketPrice = 0;

    switch (dayType) {
        case 'Weekday':
            if(0 <= clientAge && clientAge <= 18) {
                ticketPrice = 12;
            } else if (18 < clientAge && clientAge <= 64) {
                ticketPrice = 18;
            } else if (64 < clientAge && clientAge <= 122) {
                ticketPrice = 12;
            } else {
                console.log('Error!');
                break;
            }
            console.log(`${ticketPrice}$`);
            break;
        case 'Weekend':
            if(0 <= clientAge && clientAge <= 18) {
                ticketPrice = 15;
            } else if (18 < clientAge && clientAge <= 64) {
                ticketPrice = 20;
            } else if (64 < clientAge && clientAge <= 122) {
                ticketPrice = 15;
            } else {
                console.log('Error!');
                break;
            }
            console.log(`${ticketPrice}$`);
            break;
        case 'Holiday':
            if(0 <= clientAge && clientAge <= 18) {
                ticketPrice = 5;
            } else if (18 < clientAge && clientAge <= 64) {
                ticketPrice = 12;
            } else if (64 < clientAge && clientAge <= 122) {
                ticketPrice = 10;
            } else {
                console.log('Error!');
                break;
            }
            console.log(`${ticketPrice}$`);
            break;    
        default:
            break;
    }
}

theatrePromotions('Holiday', -12);