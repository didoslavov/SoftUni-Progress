function santasNewList(input) {
    const kids = {};
    const toys = {};

    for (const line of input) {
        if (line === 'END') {
            break;
        }

        const [name, toy, qty] = line.split('->');

        if (name === 'Remove') {
            delete kids[toy];
            continue;
        }

        if (!kids.hasOwnProperty(name)) {
            kids[name] = 0;
        }
        if (!toys.hasOwnProperty(toy)) {
            toys[toy] = 0;
        }

        kids[name] += Number(qty);
        toys[toy] += Number(qty);
    }
    
    const sortedKids = Object.keys(kids).sort((a, b) => kids[b] - kids[a] || a.localeCompare(b));
    console.log('Children:'); 
    sortedKids.forEach(k => console.log(`${k} -> ${kids[k]}`));

    console.log('Presents:');
    for (const toy in toys) {
        console.log(`${toy} -> ${toys[toy]}`);
    }
}

santasNewList([ 'Sammy->Candy->12', 'Annie->Candy->12', 'Dannie->Candy->12', 'END' ])
console.log('--------------------');
santasNewList([
    'Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'
  ]
  )
console.log('--------------------');
santasNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
  ]
  )