function spiceMining(yield) {
    daysCounter = 0;
    totalSpices = 0;

    for (let i = yield; i >= 100; i -= 10) {
        daysCounter++;

        totalSpices += i - 26;
    }
    if (totalSpices <= 0) {
        totalSpices = 0;
    } else {
        totalSpices -= 26;
    }

    console.log(daysCounter);
    console.log(totalSpices);
}

spiceMining(0);