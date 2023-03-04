function processOddNumbers(numbers) {
    let oddPositionNumber = numbers.filter((number, i) => i % 2 === 1);
    let doubledNumbers = oddPositionNumber.map(x => x * 2);
    let reversedNumbers = doubledNumbers.reverse();
    console.log(reversedNumbers.join(' '));
}

processOddNumbers([10, 15, 20, 25]);