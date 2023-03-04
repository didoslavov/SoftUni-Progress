function sumOfOddNumbers(number) {
    let currentNum = number;
    let firstOdd = 1;
    let sum = 0;

    for (i = 1; i <= currentNum; i++) {
            console.log(firstOdd);
            sum += firstOdd;
            firstOdd += 2;
    }
        console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);