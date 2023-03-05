function friendList(input) {
  const friendList = input.shift().split(', ');
  let line = input.shift();

  while (line !== 'Report') {
    line = line.split(' ');
    const command = line.shift();

    switch (command) {
      case 'Blacklist':
        const name = line.shift();

        if (!friendList.includes(name)) {
            console.log(`${name} was not found.`);
        } else {
            console.log(`${name} was blacklisted.`);
            let nameIndex = friendList.indexOf(name);
            friendList[nameIndex] = 'Blacklisted';
        }
        break;
      case 'Error':
        const index = Number(line.shift());
        const isValid = index >= 0 && index < friendList.length && friendList[index] !== 'Blacklisted' && friendList[index] !== 'Lost';

        if (!isValid) {
            line = input.shift();
            continue;
        }
        
        const lostName = friendList[index];

        console.log(`${lostName} was lost due to an error.`);

        friendList[index] = 'Lost';
        break;
      case 'Change':
        const i = Number(line.shift());
        const newName = line.shift();
        const iIsValid = i >= 0 && i < friendList.length;

        if (!iIsValid) {
            line = input.shift();
            continue;
        }

        console.log(`${friendList[i]} changed his username to ${newName}.`);

        friendList[i] = newName;
        break;
    }

    line = input.shift();
  }

  let blacklistedNames = 0;
  let lostNames = 0;

  for (const name of friendList) {
    if (name === 'Blacklisted') {
        blacklistedNames++;
    } else if (name === 'Lost') {
        lostNames++;
    }
  }

  console.log(`Blacklisted names: ${blacklistedNames}`);
  console.log(`Lost names: ${lostNames}`);
  console.log(friendList.join(' '));
}

friendList(['Mike, John, Eddie', 'Blacklist Mike', 'Error 0', 'Report']);
console.log('---------------');
friendList([
  'Mike, John, Eddie, William',
  'Error 3',
  'Error 3',
  'Change 0 Mike123',
  'Report',
]);
console.log('---------------');
friendList([
  'Mike, John, Eddie, William',
  'Blacklist Maya',
  'Error 1',
  'Change 4 George',
  'Report',
]);
