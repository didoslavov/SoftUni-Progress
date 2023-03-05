function greatestDivisor(a, b) {
    let gcd;

    while (b !== 0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    console.log(a);;
}

greatestDivisor(15, 5);
console.log('---------');
greatestDivisor(2154, 458);