function santasHelper(input) {
  const key = Number(input.shift());
  const goodKids = [];
  let line = input.shift();
  const pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behaviour>[GN])!/gm;
  while (line !== 'end') {
    line = line.split('');
    const lineLength = line.length;

    for (let i = 0; i < lineLength; i++) {
      const charCode = line[i].charCodeAt();
      line[i] = String.fromCharCode(charCode - key);
    }

    const decryptedMessage = line.join('');
    let matches = pattern.exec(decryptedMessage);

    while (matches !== null) {
      if (matches.groups.behaviour === 'G') {
        goodKids.push(matches.groups.name);
      }
      matches = pattern.exec(decryptedMessage);
    }
    line = input.shift();
  }
  console.log(goodKids.join('\n'));
}

santasHelper([
  '3',
  'CNdwhamigyenumje$J$',
  'CEreelh-nmguuejnW$J$',
  'CVwdq&gnmjkvng$Q$',
  'end',
]);
console.log('--------------');
santasHelper([
  '3',
  "N}eideidmk$'(mnyenmCNlpamnin$J$",
  'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
  'ppqmkkkmnolmnnCEhq/vkievk$Q$',
  'yyegiivoguCYdohqwlqh/kguimhk$J$',
  'end',
]);
  