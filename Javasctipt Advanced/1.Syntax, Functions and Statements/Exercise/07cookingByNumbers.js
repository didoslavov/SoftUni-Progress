function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    const operationsList = [op1, op2, op3, op4, op5];
    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num += 1,
        bake: (num) => num * 3,
        fillet: (num) => num -= (num * 20 / 100), 
    }

    const result = [];

    for (const operation of operationsList) {
        number = operations[operation](number)
        result.push(number);
    }

    return result.join('\n');
}

// console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
// console.log('------------');
console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));