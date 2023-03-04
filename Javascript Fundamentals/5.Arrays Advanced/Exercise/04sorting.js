function sorting(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const finalNumbers = [];

    while (sortedNumbers.length > 0) {
    let biggestNumber = sortedNumbers.pop();
    let smallestNumber = sortedNumbers.shift();
    
        finalNumbers.push(biggestNumber, smallestNumber);
    }
    console.log(finalNumbers);
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);