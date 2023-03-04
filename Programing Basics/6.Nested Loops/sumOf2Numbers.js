function sumOf2Numbers(input) {
  let startingNumber = Number(input[0]);
  let endingNumber = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0;
  let flag = false;
  let sum = 0;

  for (let i = startingNumber; i <= endingNumber; i++) {
    for (let j = startingNumber; j <= endingNumber; j++) {
      sum = i + j;
      counter++;
      if (sum === magicNumber) {
        flag = true;
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        break;
      }
    }
    if (flag === true) {
      break;
    }
  }
  if (flag === false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}

sumOf2Numbers(["23",
"24",
"20"]);
