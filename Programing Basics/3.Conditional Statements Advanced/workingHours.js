function workiingHours(input) {

    let workingHours = Number(input[0]);
    let weekDay = input[1];

    if (weekDay == "Monday" || weekDay =="Tuesday" || weekDay == "Wednesday" || weekDay == "Thursday" || weekDay == "Friday" || weekDay == "Saturday") {
        if (10 <= workingHours && workingHours <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }

}

workiingHours(["11",
"Sunday"]);