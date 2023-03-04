const { questionFloat } = require("readline-sync");

function perfectNumbers(number) {
    const aliquotSum = num => {
        let sum = 0;

        for (let i = num; i > 0; i--) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
    const isPerfect = (number) => {
        if (aliquotSum(number) / 2 === number) {
            return true;
        } else {
            return false;
        }
    }
    
    if (isPerfect(number)) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumbers(6);