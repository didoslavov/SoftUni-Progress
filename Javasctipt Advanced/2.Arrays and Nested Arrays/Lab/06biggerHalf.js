function biggerHalfOfArray(numbers) {
    const index = numbers.length % 2 === 0 ? numbers.length / 2 : Math.ceil(numbers.length / 2) - 1;
    return numbers.sort((a, b) => a - b).splice(index);
}

console.log(biggerHalfOfArray([3, 19, 14, 7, 2, 19, 6]));