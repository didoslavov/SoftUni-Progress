function equalSum(input){
    let index = 0;
    let firstNumber = Number(input[index]);
    index++;
    let secondNumber = Number(input[index]);
    let print = '';

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = String(i);
        let even = 0;
        let odd = 0;
        for (let j = 0; j <= currentNumber.length; j++){
            let currentDigit = Number(currentNumber.charAt(j));
            if (j % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        if (even === odd) {
            print += ` ${i}`;
        }
    }
    console.log(print);
}

equalSum(["123456",
"124000"]);