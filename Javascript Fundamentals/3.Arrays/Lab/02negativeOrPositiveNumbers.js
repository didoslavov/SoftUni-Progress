function negativeOrPositive(numbers) {
    let printResult = [];

    for (let number of numbers) {
        if (number < 0) {
            printResult.unshift(number);
        } else {
            printResult.push(number);
        }
    }
    console.log(printResult.join('\n'));
}

negativeOrPositive(['3', '-2', '0', '-1']);