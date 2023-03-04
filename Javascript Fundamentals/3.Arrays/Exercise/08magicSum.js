function magicSum(numbers, magicSum) {
   let magicPair = [];
   const numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        const currentDigit = numbers[i];
        for (let j = i + 1; j < numbersLength; j++) {
            const nextDigit = numbers[j];
            
            if ((currentDigit + nextDigit) === magicSum) {
                magicPair = [currentDigit, nextDigit];
                console.log(magicPair.join(' '));
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27);