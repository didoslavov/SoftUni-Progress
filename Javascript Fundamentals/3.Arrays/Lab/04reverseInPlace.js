function reverseInPlace(arrayOfStrings) {
  for (let i = 0; i < arrayOfStrings.length / 2; i++) {
    let tempElement = arrayOfStrings[i];

    arrayOfStrings[i] = arrayOfStrings[arrayOfStrings.length - 1 - i];
    arrayOfStrings[arrayOfStrings.length - 1 - i] = tempElement;
  }

  console.log(arrayOfStrings.join(" "));
}

reverseInPlace(["a", "b", "c", "d", "e"]);
