function biggestElement(matrix) {
    const largest = [];

    for (const numbers of matrix) {
        const currentLargest = Math.max.apply(Math, numbers);
        largest.push(currentLargest);
    }

    return Math.max.apply(Math, largest);
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log('-----------');
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));