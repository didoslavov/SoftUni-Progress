function rigthPlace(string, char, secondString) {
  let correct = string.replace("_", char);
  let output = correct == secondString ? "Matched" : "Not Matched";

  console.log(output);
}

rigthPlace("Str_ng", "I", "Strong");
