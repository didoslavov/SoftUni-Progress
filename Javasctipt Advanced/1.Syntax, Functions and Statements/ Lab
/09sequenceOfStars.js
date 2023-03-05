function starsSequence(number) {
    if (number === undefined) {
        number = 5;
    }

    for (let i = 0; i < number; i++) {
        console.log('* '.repeat(number));
    }
}

starsSequence(2)