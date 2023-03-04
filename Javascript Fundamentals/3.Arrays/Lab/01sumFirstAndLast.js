 function sumFirstAndLast(numbers) {
    let sum = Number(numbers.shift()) + Number(numbers.pop());

    console.log(sum);
 }

 sumFirstAndLast(['5', '10']);