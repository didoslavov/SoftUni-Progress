function cinemaTickets(input){

    let day = input[0];
    let ticket = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        ticket = 12;
    } else if (day == "Wednesday" || day == "Thursday") {
        ticket = 14;
    } else if (day == "Saturday" || day == "Sunday"){
        ticket = 16;
    }
    console.log(ticket);
}

cinemaTickets(["Friday"]);