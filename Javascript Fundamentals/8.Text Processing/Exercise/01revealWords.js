function revealWords(keyWordsString, mainString) {
  const keyWords = [...keyWordsString.split(', ')];
  const string = [...mainString.split(' ')];
  let substring = mainString;

  for (const cencoredWord of string) {
    if (cencoredWord.includes('*')) {
      const censoredWordLength = cencoredWord.length;

      for (const keyWord of keyWords) {
        if (keyWord.length === censoredWordLength) {
          substring = substring.replace(cencoredWord, keyWord);
          break;
        }
      }
    } else {
      continue;
    }
  }

  console.log(substring);
}

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
