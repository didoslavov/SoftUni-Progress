function decryptingCommands(input) {
    let message = input.shift();
  
    let line = input.shift();
  
    while (line !== 'Finish') {
      const [command, ...params] = line.split(' ');
  
      switch (command) {
        case 'Replace':
          const [currentChar, newChar] = params;
  
          while(message.includes(currentChar)) {
              message = message.replace(currentChar, newChar);
          };
          console.log(message);
          break;
        case 'Cut':
          const [startIndex, endIndex] = params;
  
          const areValid = startIndex >= 0 && startIndex < message.length && endIndex >= 0 && endIndex < message.length;
  
          if (areValid) {
              const firstSub = message.substring(0, Number(startIndex));
              const secondSub = message.substring(Number(endIndex) + 1);
              message = firstSub + secondSub;
              console.log(message);
          } else {
              console.log('Invalid indices!');
          }
          break;
        case 'Make':
          const [upperOrlower] = params;
  
          if (upperOrlower === 'Upper') {
              message = message.toUpperCase();
          } else {
              message = message.toLowerCase();
          }
  
          console.log(message);
          break;
        case 'Check':
          const [string] = params;
  
          if (message.includes(string)) {
              console.log(`Message contains ${string}`);
          } else {
              console.log(`Message doesn't contain ${string}`);
          }
          break;
        case 'Sum':
          const [firstIndex, secondIndex] = params;
  
          const validIndexes = firstIndex >= 0 && firstIndex < message.length && secondIndex >= 0 && secondIndex < message.length;
  
          if(validIndexes) {
              const substr = message.substring(Number(firstIndex), Number(secondIndex) + 1);
              let sum = 0;
  
              for (const ch of substr) {
                  sum += ch.charCodeAt();
              }
              console.log(sum);
          } else {
              console.log('Invalid indices!');
          }
  
          break;
      }
  
      line = input.shift();
    }
  }
  
  decryptingCommands([
    'ILikeSoftUni',
    'Replace I We',
    'Make Upper',
    'Check SoftUni',
    'Sum 1 4',
    'Cut 1 4',
    'Finish',
  ]);
  console.log('--------------');
  decryptingCommands([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish',
  ]);
  