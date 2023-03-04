function printSmallestNumber(firstNum, secondNum, thirdNum ) {
    const numbers = [firstNum, secondNum, thirdNum];

    console.log(numbers.sort((a,b) => b - a).pop());
}

printSmallestNumber(2,
    5,
    3);