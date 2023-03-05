function sameNumbers(integer) {
    const digits = String(integer).split('');
    const sum = digits.map(x => Number(x)).reduce((acc, num) => acc + num, 0);
    const uniqueDigits = new Set(digits);

    if (uniqueDigits.size === 1) {
        console.log(true);
        console.log(sum);
    } else {
        console.log(false);
        console.log(sum);
    }
}

sameNumbers(2222222);
console.log('-----------');
sameNumbers(1234);