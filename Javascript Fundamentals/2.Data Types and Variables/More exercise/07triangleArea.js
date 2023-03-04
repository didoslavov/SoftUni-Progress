function findTriangleArea(firstNumber, secondNumber, thirdNumber) {
    const s = (firstNumber + secondNumber + thirdNumber) / 2;

    const area = Math.sqrt(s * (s - firstNumber) * (s - secondNumber) * (s - thirdNumber));

    console.log(area);
}

findTriangleArea(3,
    5.5,
    4);