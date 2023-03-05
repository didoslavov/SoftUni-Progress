function addressBook(entries) {
    const addressBook = {};

    for (const entry of entries) {
        const currentEntry = entry.split(':');
        const name = currentEntry[0];
        const address = currentEntry[1];
        
        addressBook[name] = address;
    }
    
    const addressBookArr = Object.entries(addressBook);
    const sortedAddressBook = addressBookArr.sort((a,b) => a[0].localeCompare(b[0]));
    
    sortedAddressBook.forEach((arr) => console.log(`${arr[0]} -> ${arr[1]}`))
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

console.log('===============');

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);