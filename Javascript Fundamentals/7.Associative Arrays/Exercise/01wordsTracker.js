function wordsTracker(input) {
  const words = [...input];
  const keyWords = words.shift().split(' ');
  let counter = 1;
  const wordsList = {};

  for (const word of words) {
    if (!wordsList.hasOwnProperty(word)) {
      wordsList[word] = counter;
    } else {
      wordsList[word] += counter;
    }
  }

  const sortedKeywords = [];
  for (const keyWord of keyWords) {
    if (wordsList.hasOwnProperty(keyWord)) {
      sortedKeywords.push([keyWord, wordsList[keyWord]]);
    } else {
      sortedKeywords.push([keyWord, 0]);
    }
  }

  sortedKeywords
    .sort((a, b) => b[1] - a[1])
    .forEach((el) => console.log(`${el[0]} - ${el[1]}`));
}

wordsTracker([
  'this sentence',
  'In',
  'this1',
  'sentence1',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this2',
  'and',
  'sentence2',
  'because',
  'this3',
  'is',
  'your',
  'task',
]);
