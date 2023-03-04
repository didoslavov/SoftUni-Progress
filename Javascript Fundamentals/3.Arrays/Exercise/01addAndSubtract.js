function changeValuesOfEvenAndOddNumbers(numbers) {
    const modifiedNumbers = [];
    let originalSum = numbers.reduce((x, sum) => sum += x);
    const numbersLength = numbers.length;
    
    for (let i = 0; i < numbersLength; i++) {
        if (numbers[i] % 2 === 0) {
            modifiedNumbers.push(numbers[i] + i);
        } else {
            modifiedNumbers.push(numbers[i] - i);
        }
    }
    let modifiedSum = modifiedNumbers.reduce((x, sum) => sum += x);

    console.log(`[ ${modifiedNumbers.join(', ')} ]`);
    console.log(originalSum);
    console.log(modifiedSum);

}

changeValuesOfEvenAndOddNumbers([5, 15, 23, 56, 35]);