function signCheck(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        return 'Negative';
    } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber >= 0) {
        return 'Positive';
    } else if (firstNumber < 0 && secondNumber >= 0 && thirdNumber >= 0) {
        return 'Negative';
    } else if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
        return 'Positive';
    } else if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber < 0) {
        return 'Negative';
    } else if (firstNumber >= 0 && secondNumber < 0 && thirdNumber < 0) {
        return 'Positive';
    } else if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber < 0) {
        return 'Negative';
    }
}

signCheck(-5, 12, 15);
