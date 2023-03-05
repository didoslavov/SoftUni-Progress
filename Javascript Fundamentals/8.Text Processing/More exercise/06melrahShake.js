function melrahShake(input) {
  let message = input.shift();
  let pattern = input.shift();
  let shakeIt = 0;

  while (pattern.length > 0) {
    const firstIndex = message.indexOf(pattern);
    const lastIndex = message.lastIndexOf(pattern);

    if (firstIndex > -1 && lastIndex > -1 && firstIndex !== lastIndex) {
      message = message.split('');
      message.splice(lastIndex, pattern.length);
      message.splice(firstIndex, pattern.length);
      message = message.join('');

      const patternCharToReplace = pattern[Math.floor(pattern.length / 2)];
      pattern = pattern.replace(patternCharToReplace, '');
      console.log('Shaked it.');
    } else {
      break;
    }
  }
  console.log('No shake.');
  console.log(message);
}

melrahShake(['stastasasssastasta', 'sta']);
console.log('---------------');
melrahShake(['astalavista baby', 'sta']);
console.log('----------------');
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);
