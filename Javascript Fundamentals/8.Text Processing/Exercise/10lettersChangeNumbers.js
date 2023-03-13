function lettersChangeNumbers(input) {
  const strings = input.trim().split(/\s+/gm);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = 0;

  for (const currentWord of strings) {
    let sum = 0;
    const firstLetter = currentWord[0];
    const secondLetter = currentWord[currentWord.length - 1];

    const number = getNumber(currentWord);
    sum += letterBeforeNumber(firstLetter, alphabet, number);
    sum = letterAfterNumber(secondLetter, alphabet, sum);
    result += sum;
  }

  return result.toFixed(2);

  function letterBeforeNumber(letter, alphabet, number) {
    const isUpperCase =
      isNaN(letter) && letter.charCodeAt() > 64 && letter.charCodeAt() < 91;
    const isLowerCase =
      isNaN(letter) && letter.charCodeAt() > 96 && letter.charCodeAt() < 123;
    const alphabetPosition = alphabet.indexOf(letter.toLowerCase()) + 1;

    if (isUpperCase) {
      return number / alphabetPosition;
    } else if (isLowerCase) {
      return number * alphabetPosition;
    }
  }

  function letterAfterNumber(letter, alphabet, number) {
    const isUpperCase =
      isNaN(letter) && letter.charCodeAt() > 64 && letter.charCodeAt() < 91;
    const isLowerCase =
      isNaN(letter) && letter.charCodeAt() > 96 && letter.charCodeAt() < 123;
    const alphabetPosition = alphabet.indexOf(letter.toLowerCase()) + 1;

    if (isUpperCase) {
      return number - alphabetPosition;
    } else if (isLowerCase) {
      return number + alphabetPosition;
    }
  }

  function getNumber(string) {
    const stringLength = string.length;
    let number = '';

    for (let i = 0; i < stringLength; i++) {
      if (!isNaN(string[i])) {
        number += string[i];
      }
    }
    return Number(number);
  }
}

console.log(lettersChangeNumbers('A12b A12b   '));
