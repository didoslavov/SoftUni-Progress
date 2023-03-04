function sumNumbers(input) {
  let finalSum = Number(input[0]);
  let i = 1;
  let sum = 0;

  while (sum < finalSum) {
    let currentNumber = Number(input[i]);
    sum += currentNumber;
    i++;
  }
  console.log(sum);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
