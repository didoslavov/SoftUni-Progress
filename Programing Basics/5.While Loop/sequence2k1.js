function sequence2k1(input) {
  let digit = Number(input[0]);
  let i = 1;

  while (i <= digit) {
    console.log(i);
    i = i * 2 + 1;
  }
}

sequence2k1(["31"]);
