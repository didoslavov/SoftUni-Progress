function printNumbersAndSum(startNumber, endNumber) {
    let printResult = [];
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        printResult.push(i);
        sum += i;
    }
    console.log(`${printResult.join(' ')}
Sum: ${sum}`);
}

printNumbersAndSum(50, 60);
