function numbersSorter(firstNumber, secondNumber, thirdNumber) {
    const numberArray = [firstNumber, secondNumber, thirdNumber];

    numberArray.sort((a, b) => b - a);

    console.log(numberArray.join('\n'));
}

numbersSorter(2, 1, 3);
