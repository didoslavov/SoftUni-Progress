function mirrorWords(input) {
  const string = input.shift();
  const pattern = /([@#])(?<word>[A-Za-z]{3,})\1{2}(?<word1>[A-Za-z]{3,})\1/gm;
  const validPairs = [];
  let match;
  let matches = 0;

  while ((match = pattern.exec(string))) {
    validPairs.push(match.groups);
  }

  console.log(
    validPairs.length
      ? `${validPairs.length} word pairs found!`
      : 'No word pairs found!'
  );

  const mirrorWords = validPairs.filter((p) => isMirrorWord(p));

  if (mirrorWords.length) {
    console.log('The mirror words are:');
    console.log(
      mirrorWords.map((pair) => `${pair.word} <=> ${pair.word1}`).join(', ')
    );
  } else {
    console.log('No mirror words!');
  }

  function isMirrorWord(pair) {
    return pair.word === pair.word1.split('').reverse().join('');
  }
}

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
