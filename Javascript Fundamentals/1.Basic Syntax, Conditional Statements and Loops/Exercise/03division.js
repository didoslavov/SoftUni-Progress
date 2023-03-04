function division(number) {
    let isDivisible = false;
    let currentNumber = 0;

    if (number % 10 == 0) {
        currentNumber = 10;
        isDivisible = true;
    } else if (number % 7 == 0) {
        currentNumber = 7;
        isDivisible = true;
    } else if (number % 6 == 0) {
        currentNumber = 6;
        isDivisible = true;
    } else if (number % 3 == 0) {
        currentNumber = 3; 
        isDivisible = true;
    } else if (number % 2 == 0) {
        currentNumber = 2;
        isDivisible = true;
    }

    if (isDivisible) {
        console.log(`The number is divisible by ${currentNumber}`);
    } else {
        console.log('Not divisible');
    }
}

division(1643);