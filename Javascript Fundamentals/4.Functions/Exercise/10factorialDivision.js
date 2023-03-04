function factorialDivision(firstNum, secondNum) {
    const factorial = (num) => !(num > 1) ? 1 : factorial(num - 1) * num;

    console.log((factorial(firstNum) / factorial(secondNum)).toFixed(2));
}

factorialDivision(6, 2);