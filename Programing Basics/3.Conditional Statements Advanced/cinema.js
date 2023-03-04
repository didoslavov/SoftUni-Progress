function cinema(input) {

    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let totalSeats = rows * columns;
    let totalPrice = 0;

    switch(movieType) {
        case "Premiere":
            totalPrice = totalSeats * 12.00;
            break;
        case "Normal":
            totalPrice = totalSeats * 7.50;
            break;
        case "Discount":
            totalPrice = totalSeats * 5.00;
            break;
    }
    console.log(totalPrice.toFixed(2));

}

cinema(["Premiere",
"10",
"12"]);