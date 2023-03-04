function sumEquality(numbers) {
    let printOutput = 'no';
    const numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {
            leftSum += numbers[left];
        }
        for (let right = i + 1; right < numbersLength; right++) {
            rightSum += numbers[right];
        }

        if (leftSum === rightSum) {
            printOutput = i;
        }
    }
    console.log(printOutput);
}

sumEquality([1, 2, 3, 3]);