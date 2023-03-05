function phoneBook(entries) {
    const phoneBook = {};

    for (const entry of entries) {
        const currentEntry = entry.split(' ');
        const name = currentEntry[0];
        const phone = currentEntry[1];
        phoneBook[name] = phone;
    }

    for (const name in phoneBook) {
        // console.log(`${name} -> ${phoneBook[name]}`);
    }
}

phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']);

//  console.log('==================');

 phoneBook(['George 0552554',
 'Peter 087587',
 'George 0453112',
 'Bill 0845344']);

 let str = '12, 22, 23, 28, 40'
 let index = str.indexOf('23');
 console.log(index);

