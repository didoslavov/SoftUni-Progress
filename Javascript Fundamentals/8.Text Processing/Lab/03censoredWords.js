function censoredWords(string, word) {
  let censoredString = string;
  const wordLength = word.length;
  const specialSymbol = '*';

  while (censoredString.includes(word)) {
    censoredString = censoredString.replace(
      word,
      specialSymbol.repeat(wordLength)
    );
  }
  console.log(censoredString);
}

censoredWords('A small sentence with some words', 'small');
