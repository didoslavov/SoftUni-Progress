function aggregateElements(input) {
    const sum = (numbers) => input.reduce((acc, num) => acc + num, 0);
    const inverseSum = (numbers) => input.reduce((acc, num) => acc + (1 / num), 0);
    const concat = (numbers) => numbers.join('');

    console.log(sum(input));
    console.log(inverseSum(input));
    console.log(concat(input));
}

aggregateElements([1, 2, 3]);
console.log('------------');
aggregateElements([2, 4, 8, 16]);
