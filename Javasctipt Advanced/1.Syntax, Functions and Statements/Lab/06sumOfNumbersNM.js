function sumOfNumbersBetweenTwoNums(firstNumAsString, secondNumAsString) {
    const firstNum = Number(firstNumAsString);
    const secondNum = Number(secondNumAsString);

    let result = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
}

console.log(sumOfNumbersBetweenTwoNums('1', '5'));
console.log(sumOfNumbersBetweenTwoNums('-8', '20'));
