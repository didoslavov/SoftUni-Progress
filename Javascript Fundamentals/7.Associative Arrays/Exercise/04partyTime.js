function partyTime(list) {
  const vipList = [];
  const regularList = [];
  let line = list.shift();

  while (line !== 'PARTY') {
    const isVip = !isNaN(line[0]);
    if (isVip) {
      vipList.push(line);
    } else {
      regularList.push(line);
    }

    line = list.shift();
  }

  const allGuests = vipList.concat(regularList);

  for (const guest of list) {
    const index = allGuests.indexOf(guest);

    if (index >= 0) {
      allGuests.splice(index, 1);
    }
  }

  console.log(allGuests.length);
  allGuests.forEach((guest) => {
    console.log(guest);
  });
}

partyTime([
  '2FQZT3uC',
  'afojwofa',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
]);
