function numsDevidebleBy9(input) {

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let sum = 0;
let outputNums = "";

for (let i = num1; i <= num2; i++) {
    if (i % 9 == 0) {
        sum += i;
        outputNums += i + "\n";
    }
}

console.log(`The sum: ${sum}`);
console.log(outputNums);

}

numsDevidebleBy9(["100", "200"]);