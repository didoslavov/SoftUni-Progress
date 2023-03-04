function multiplicationTable(input) {
  let number = Number(input[0]);
  result = 0;
  for (let i = 1; i <= 10; i++) {
    result = i * number;
    console.log(`${i} * ${number} = ${result}`);
  }
}

multiplicationTable(["20"]);
