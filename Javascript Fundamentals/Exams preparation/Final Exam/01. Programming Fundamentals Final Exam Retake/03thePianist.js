function thePianist(input) {
    const initialNumber = Number(input.shift());
    const commands = {
        add,
        remove,
        changekey,
    }
    const list = {};

    input.splice(0, initialNumber).forEach(line => {
        const [name, composer, key] = line.split('|');
        list[name] = {
            composer,
            key,
        };
    });
    
    let line = input.shift();

    while(line !== 'Stop') {
        const [command, ...pieceInfo] = line.split('|');
        commands[command.toLowerCase()](pieceInfo);
        line = input.shift(); 
    }

    for (const piece in list) {
        console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`);
    }
    

    function add(pieceInfo) {
        const [piece, composer, key] = pieceInfo;

        if (list.hasOwnProperty(piece)) return console.log(`${piece} is already in the collection!`);

        list[piece] = {
            composer,
            key,
        }
           return console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }
    function remove(pieceInfo) {
        const [piece] = pieceInfo;

        if (!list.hasOwnProperty(piece)) return console.log(`Invalid operation! ${piece} does not exist in the collection.`);

        delete list[piece];
        return console.log(`Successfully removed ${piece}!`);
    }
    function changekey(pieceInfo) {
        const [piece, newKey] = pieceInfo;

        if (!list.hasOwnProperty(piece)) return console.log(`Invalid operation! ${piece} does not exist in the collection.`);

        list[piece].key = newKey;
        return console.log(`Changed the key of ${piece} to ${newKey}!`);
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ])