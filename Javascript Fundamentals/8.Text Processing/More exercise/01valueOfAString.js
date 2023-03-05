function stringValue(input) {
  const string = input.shift().split('');
  const command = input.shift();

  let sum = 0;

  if (command === 'LOWERCASE') {
    sum = string
      .filter((x) => /[a-z]/.test(x))
      .reduce((acc, char) => acc + Number(char.charCodeAt()), 0);
  } else {
    sum = string
      .filter((x) => /[A-Z]/.test(x))
      .reduce((acc, char) => acc + Number(char.charCodeAt()), 0);
  }
  console.log(`The total sum is: ${sum}`);
}

stringValue(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
console.log('-----------------');
stringValue(['AC/DC', 'UPPERCASE']);
