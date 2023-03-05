function phoneShop(input) {
  const phoneList = input.shift().split(', ');
  let line = input.shift();

  while (line !== 'End') {
    line = line.split(' - ');
    const command = line.shift();
    const phone = line.shift();

    switch (command) {
      case 'Add':
        if (phoneList.includes(phone)) {
            line = input.shift();
            continue;
        }

        phoneList.push(phone);
        break;
      case 'Remove':
        if (!phoneList.includes(phone)) {
            line = input.shift();
            continue;
        }

        const phoneIndex = phoneList.indexOf(phone);

        phoneList.splice(phoneIndex, 1);
        break;
      case 'Bonus phone':
        const [oldPhone, newPhone] = phone.split(':');

        if (!phoneList.includes(oldPhone)) {
            line = input.shift();
            continue;
        }

        const oldPhoneIndex = phoneList.indexOf(oldPhone) + 1;
        phoneList.splice(oldPhoneIndex, 0, newPhone);
        break;
      case 'Last':
        if (!phoneList.includes(phone)) {
            line = input.shift();
            continue;
        }

        const index = phoneList.indexOf(phone);

        const splicedPhone = phoneList.splice(index, 1);
        phoneList.push(splicedPhone);
        break;
    }

    line = input.shift();
  }
  console.log(phoneList.join(', '));
}

phoneShop([
  'SamsungA50, MotorolaG5, IphoneSE',
  'Add - Iphone10',
  'Remove - IphoneSE',
  'End',
]);
console.log('------------');
phoneShop([
  'HuaweiP20, XiaomiNote',
  'Remove - Samsung',
  'Bonus phone - XiaomiNote:Iphone5',
  'End',
]);
console.log('------------');
phoneShop([
  'SamsungA50, MotorolaG5, HuaweiP10',
  'Last - SamsungA50',
  'Add - MotorolaG5',
  'End',
]);
