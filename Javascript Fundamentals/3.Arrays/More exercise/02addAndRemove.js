function addAndRemove(commands) {
  const array = [];
  let currentNumber = 1;

  for (const command of commands) {
    switch (command) {
      case 'add':
        array.push(currentNumber);
        currentNumber++;
        break;
      case 'remove':
        array.pop();
        currentNumber++;
        break;
    }
  }
    array.length > 0 ? console.log(array.join(' ')) : console.log('Empty');
}

addAndRemove(['add', 'add', 'add', 'add']
);
