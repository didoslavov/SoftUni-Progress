function numberSequance(sequanceLength, sumCount) {
    let sequance = [1];

    for (let i = 1; i < sequanceLength; i++) {
        let index = Math.max(sequance.length - sumCount, 0);
        let lastNumbers = sequance.slice(index);

        let sum = 0;

        for (const currentNumber of lastNumbers) {
            sum += currentNumber;
        }
        sequance.push(sum);
    }
    console.log(sequance.join(' '));
}

numberSequance(6, 3);
numberSequance(8, 2);