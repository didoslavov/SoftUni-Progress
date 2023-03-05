function evenPositionElement(numbers) {
    const evenNumbers = numbers.filter((x, i) => i % 2 === 0);
    console.log(evenNumbers.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
console.log('-----------------');
evenPositionElement(['5', '10']);