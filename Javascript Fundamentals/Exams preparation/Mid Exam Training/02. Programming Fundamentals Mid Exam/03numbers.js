function numbers(digits) {
    const numbers = digits.split(' ').map(x => Number(x));
    const avarageValue = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    const filteredNumbers = numbers.filter(x => x > avarageValue);
    const sortedNumbers = filteredNumbers.sort((a, b) => b - a).slice(0, 5);

    if (sortedNumbers.length < 1) {
        return 'No'
    }

    return sortedNumbers.join(' ')
}

console.log(numbers('10 20 30 40 50'));
console.log('------------');
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log('------------');
console.log(numbers('1'));
console.log('------------');
console.log(numbers('-1 -2 -3 -4 -5 -6'));
