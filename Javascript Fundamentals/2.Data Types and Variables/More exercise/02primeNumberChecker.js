function isPrime(digit) {
    let isPrime = true;

    if (digit > 1) {
        for (let i = 2; i < digit; i++) {
            if (digit % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;
}

isPrime(81);