function secretChat(input) {
  let message = input.shift();
  let line = input.shift();

  while (line !== 'Reveal') {
    const [command, ...params] = line.split(':|:');

    switch (command) {
      case 'InsertSpace':
        const index = Number(params.shift());
        message = message.slice(0, index) + ' ' + message.slice(index);
        break;
      case 'Reverse':
        let [substring] = params;

        if (!message.includes(substring)) {
          console.log('error');
          line = input.shift();
          continue;
        }

        message = message.replace(substring, '');
        substring = substring.split('').reverse().join('');
        message += substring;
        break;
      case 'ChangeAll':
        const [substr, replacement] = params;

        while (message.includes(substr)) {
          message = message.replace(substr, replacement);
        }
        break;
    }

    console.log(message);
    line = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}

secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);
