function arrayRotation(numbers, rotationsCount) {
    for (let i = 0; i < rotationsCount; i++) {
        let shiftedNumber = numbers.shift();
        numbers.push(shiftedNumber);
    }
    console.log(numbers.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);