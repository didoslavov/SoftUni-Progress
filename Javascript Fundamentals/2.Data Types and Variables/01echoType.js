function echoType(input) {
  typeOfInput = typeof input;

  console.log(typeOfInput);

  if (typeOfInput !== "string" && typeOfInput !== "number") {
    console.log("Parameter is not suitable for printing");
  } else {
    console.log(input);
  }
}

echoType(null);
