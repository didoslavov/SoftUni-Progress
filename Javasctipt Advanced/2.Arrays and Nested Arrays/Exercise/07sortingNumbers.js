function sortingNumbers(numbers) {
    const result = [];
    const smallest = numbers.sort((a,b) => a - b).slice(0, Math.ceil(numbers.length / 2));
    const biggest = numbers.sort((a,b) => b - a).slice(0, Math.floor(numbers.length / 2))
    
    for (let i = 0; i < Math.max(smallest.length, biggest.length); i++) {
        result.push(smallest[i]);
        result.push(biggest[i]);
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));