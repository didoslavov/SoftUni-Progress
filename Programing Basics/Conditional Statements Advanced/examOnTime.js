function examOnTime(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examTimeMin = examHour * 60 + examMin;
    let arrivalTimeMin = arrivalHour * 60 + arrivalMin;
    let difference = examTimeMin - arrivalTimeMin;
    let hours;
    let minutes;

    if (difference === 0) {
        console.log("On time");
    } else if (difference <= 30 && difference >= 0) {
        minutes = difference;
        console.log("On time");
        console.log(`${minutes} minutes before the start`);
    } else if (examTimeMin > arrivalTimeMin) {
        difference = Math.abs(difference);
        minutes = difference % 60;
        hours = Math.floor(difference / 60);
        console.log("Early");
        if (minutes <= 10 && hours > 0) {
            console.log(`${hours}:0${minutes} hours before the start`);
        } else if (minutes > 10 && hours > 0) {
            console.log(`${hours}:${minutes} hours before the start`);
        } else {
            console.log(`${minutes} minutes before the start`);
        }
    } else if (arrivalTimeMin > examTimeMin) {
        difference = Math.abs(difference);
        minutes = difference % 60;
        hours = Math.floor(difference / 60);
        console.log("Late");
        if (minutes <= 10 && hours > 0) {
            console.log(`${hours}:0${minutes} hours after the start`);
        } else if (minutes > 10 && hours > 0) {
            console.log(`${hours}:${minutes} hours after the start`);
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    }

}

examOnTime(["9",
    "00",
    "8",
    "30"]);