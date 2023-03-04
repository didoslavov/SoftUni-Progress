function timePlus15min(input) {

    let hours = Number(input[0]);
    let mins = Number(input[1]);

    let time = hours * 60 + mins + 15;
    let totalHours = Math.floor(time / 60);
    let totalMins = time % 60;
    
    if (totalHours > 23) {
        totalHours = 0;
    }

    if (totalMins < 10) {
        console.log(`${totalHours}:0${totalMins}`);
    } else {
        console.log(`${totalHours}:${totalMins}`);
    }

}

timePlus15min(["23", "59"]);