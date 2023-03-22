function activationKeys(input) {
  let key = input.shift();
  let line = input.shift();

  while (line !== 'Generate') {
    const [command, ...params] = line.split('>>>');

    switch (command) {
      case 'Contains':
        const [substr] = params;

        if (key.includes(substr)) {
            console.log(`${key} contains ${substr}`);
        } else {
            console.log('Substring not found!');
        }
        break;
      case 'Flip':
        const [changeCase, start, end] = params;

        if (changeCase === 'Lower') {
            key = key.slice(0, Number(start)) + key.slice(start, end).toLowerCase() + key.slice(end);
        } else {
            key = key.slice(0, Number(start)) + key.slice(start, end).toUpperCase() + key.slice(end);
        }
        console.log(key);
        break;
      case 'Slice':
        const [startIndex, endIndex] = params;
        key = key.slice(0, Number(startIndex)) + key.slice(Number(endIndex));
        console.log(key);
        break;
    }

    line = input.shift();
  }

  console.log(`Your activation key is: ${key}`);
}

activationKeys([
  'abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate',
]);


/*
abghijklmnopqrstuvwxyz - abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz - 
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz 
*/