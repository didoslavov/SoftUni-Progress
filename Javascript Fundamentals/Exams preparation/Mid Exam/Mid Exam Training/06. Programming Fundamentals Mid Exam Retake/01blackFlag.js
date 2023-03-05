function blackFlag(input) {
    const pirateInput = input.map(x => Number(x));
    let [duration, dayPlunder, expectedPlunder] = pirateInput;
    let totalPlunder = 0;

    for (let i = 1; i <= duration; i++) {
        totalPlunder += dayPlunder;

        if (i % 3 === 0) {
            totalPlunder += dayPlunder * 0.5;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        const percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag((["5",
"40",
"100"]));
console.log('-------------');
blackFlag((["10",
"20",
"380"]));