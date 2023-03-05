function replaceRepeatingChars(string) {
  let printResult = '';
  const stringLength = string.length;

  for (let i = 0; i < stringLength; i++) {
    const currentChar = string[i];
    const nextChar = string[i + 1];

    if (currentChar !== nextChar) {
      printResult += currentChar;
    }
  }

  console.log(printResult);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
