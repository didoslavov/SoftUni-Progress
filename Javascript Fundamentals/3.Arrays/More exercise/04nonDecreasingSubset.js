function nonDecreasingSubset(numbers) {
    let currentBiggest = numbers[0];
    const newArray = numbers.filter(x => {
        if (x >= currentBiggest) {
            currentBiggest = x;
        }
        return x >= currentBiggest;
    });

    console.log(newArray.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);