function pyramid(input) {
  let number = Number(input[0]);
  let current = 1;
  let flag = false;
  let print = "";

  for (let rows = 1; rows <= number; rows++) {
    for (let printNumber = 1; printNumber <= rows; printNumber++) {
      if (current > number) {
        flag = true;
        break;
      }
      print += current + " ";
      current++;
    }
    console.log(print);
    print = "";
    if (flag) {
      break;
    }
  }
}

pyramid(["12"]);
