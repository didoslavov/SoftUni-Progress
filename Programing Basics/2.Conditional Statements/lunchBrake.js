function lunchBrake(input) {

    let seriesName = input[0];
    let seriesDuration = Number(input[1]);
    let brakeDuration = Number(input[2]);

    let lunchDuration = brakeDuration / 8;
    let relaxDuration = brakeDuration / 4;

    let spareTime = brakeDuration - lunchDuration - relaxDuration;
    let timeLeft = Math.abs(seriesDuration - spareTime);

    if (spareTime >= seriesDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeLeft)} more minutes.`)
    }

}

lunchBrake(["Teen Wolf",
"48",
"60"])