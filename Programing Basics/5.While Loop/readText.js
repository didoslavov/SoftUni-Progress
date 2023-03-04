function readText(input) {
  let i = 0;
  let text = String(input[i]);

  while (text !== "Stop") {
    i++;
    console.log(text);
    text = String(input[i]);
  }
}

readText([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
