function generatePassword(strings) {
  const keyWord = strings.pop().toUpperCase();
  let passwordBase = strings.join('');
  const passwordBaseLength = passwordBase.length;
  const vowels = ['a', 'o', 'u', 'i', 'e'];
  const keyWordLength = keyWord.length;
  let j = 0;

  for (let i = 0; i < passwordBaseLength; i++) {
    if (vowels.includes(passwordBase[i])) {
      passwordBase = passwordBase.replace(passwordBase[i], keyWord[j]);
      j++;
      if (j === keyWordLength) {
        j = 0;
      }
    } else {
      continue;
    }
  }
  passwordBase = [...passwordBase];
  return `Your generated password is ${passwordBase.reverse().join('')}`;
}

console.log(generatePassword([
  'areyousureaboutthisone',
  'notquitebutitrustyou',
  'disturbed',
]));
