function treasureFinder(input) {
  const key = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let cryptedMessage = input.shift();

  while (cryptedMessage !== 'find') {
    let decryptedMessage = '';
    const keyLength = key.length;
    let i = 0;

    for (const char of cryptedMessage) {
      const decryptedChar = String.fromCharCode(char.charCodeAt() - key[i]);
      decryptedMessage += decryptedChar;
      i++;

      if (i === keyLength) {
        i = 0;
      }
    }

    const treasure = decryptedMessage.substring(
      decryptedMessage.indexOf('&') + 1,
      decryptedMessage.indexOf('&', decryptedMessage.indexOf('&') + 1)
    );
    const coordinates = decryptedMessage.substring(
      decryptedMessage.indexOf('<') + 1,
      decryptedMessage.indexOf('>')
    );
    console.log(`Found ${treasure} at ${coordinates}`);
    cryptedMessage = input.shift();
  }
}

treasureFinder([
  '1 2 1 3',
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  'find',
]);
console.log('--------------');
treasureFinder([
  '1 4 2 5 3 2 1',
  `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  'find',
]);
