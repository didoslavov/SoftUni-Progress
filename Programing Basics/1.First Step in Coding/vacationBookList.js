function VacationBookList(input) { 

    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let totalTimeForBook = pagesInBook / pagesPerHour;
    let HoursPerDay = totalTimeForBook / daysNeeded;

    console.log(HoursPerDay);


}

VacationBookList([212, 20, 2]);