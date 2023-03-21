function theImitationGame(input) {
  const encryptedMessage = input.shift();
  let line = input.shift();
  let decryptedMessage = encryptedMessage;

  while (line !== 'Decode') {
    const lineInfo = line.split('|');
    const command = lineInfo.shift();

    switch (command) {
      case 'Move':
        const [number] = lineInfo;
        decryptedMessage = decryptedMessage.split('')
        const substr = decryptedMessage.splice(0, Number(number));
        decryptedMessage.push(substr.join(''));
        decryptedMessage = decryptedMessage.join('');
        break;
      case 'Insert':
        const [index, value] = lineInfo;
        decryptedMessage = decryptedMessage.split('');
        decryptedMessage.splice(Number(index), 0, value);
        decryptedMessage = decryptedMessage.join('');
        break;
      case 'ChangeAll':
        const [substring, replacement] = lineInfo;
        while (decryptedMessage.includes(substring)) {
            decryptedMessage = decryptedMessage.replace(substring, replacement);
        }
        break;
    }
    line = input.shift();
  }
  console.log(`The decrypted message is: ${decryptedMessage}`);
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]  
  );
