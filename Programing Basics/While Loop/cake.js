function cake(input) {
  let cakeH = Number(input[0]);
  let cakeW = Number(input[1]);
  let cakeSize = cakeH * cakeW;
  let i = 2;
  let command = input[i];
  let peacesTaken = 0;
  let peacesCounter = 0;

  while (command !== "STOP" && i < input.length) {
    peacesTaken = Number(input[i]);
    peacesCounter += peacesTaken;
    i++;
    command = input[i];
  }
  if (peacesCounter > cakeSize) {
    console.log(
      `No more cake left! You need ${peacesCounter - cakeSize} pieces more.`);
  } else if (peacesCounter < cakeSize) {
    console.log(`${cakeSize - peacesCounter} pieces are left.`);
  }
}

cake(["10", "2", "2", "4", "6", "STOP"]);
