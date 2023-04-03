function messagesManager(input) {
  const capacity = Number(input.shift());
  let records = {};
  let line = input.shift();

  while (line !== 'Statistics') {
    const [command, ...params] = line.split('=');

    switch (command) {
      case 'Add':
        const [username, sent, recieved] = params;

        if (!records.hasOwnProperty(username)) {
            records[username] = {
                sent: Number(sent),
                recieved: Number(recieved),
            }
        }
        break;
      case 'Message':
        const [sender, reciever] = params;

        if (records.hasOwnProperty(sender) && records.hasOwnProperty(reciever)) {
            records[sender].sent++;
            records[reciever].recieved++;

            if ((records[sender].sent + records[sender].recieved) >= capacity) {
                delete records[sender];
                console.log(`${sender} reached the capacity!`);
            }

            if ((records[reciever].sent + records[reciever].recieved) >= capacity) {
                delete records[reciever];
                console.log(`${reciever} reached the capacity!`);
            }
        }
        break;
      case 'Empty':
        const [name] = params;

        if (name === 'All') {
            records = {};
        } else {
            delete records[name];
        }
        break;
    }

    line = input.shift();
  }

  console.log(`Users count: ${Object.keys(records).length}`);

  for (const name in records) {
        console.log(`${name} - ${records[name].sent + records[name].recieved}`);
  }
}

messagesManager([
  '10',
  'Add=Berg=9=0',
  'Add=Kevin=0=0',
  'Message=Berg=Kevin',
  'Add=Mark=5=4',
  'Statistics',
]);
console.log('-------------');
messagesManager([
  '20',
  'Add=Mark=3=9',
  'Add=Berry=5=5',
  'Add=Clark=4=0',
  'Empty=Berry',
  'Add=Blake=9=3',
  'Add=Michael=3=9',
  'Add=Amy=9=9',
  'Message=Blake=Amy',
  'Message=Michael=Amy',
  'Statistics',
]);
console.log('----------------');
messagesManager([
  '12',
  'Add=Bonnie=3=5',
  'Add=Johny=4=4',
  'Empty=All',
  'Add=Bonnie=3=3',
  'Statistics',
]);
