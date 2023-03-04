function printDna(dnaLength) {
    const pattern = 'ATCGTTAGGG';
    const regex = /..?/g;
    const sequances = pattern.match(regex);
    
    for (let i = 0; i < dnaLength; i++) {
        let elements = sequances[i % 5].split('');
        if (i % 4 === 0) {
            console.log(`**${elements[0]}${elements[1]}**`);
        } else if (i % 4 === 1) {
            console.log(`*${elements[0]}--${elements[1]}*`);
        } else if (i % 4 === 2) {
            console.log(`${elements[0]}----${elements[1]}`);
        } else if (i % 4 === 3) {
            console.log(`*${elements[0]}--${elements[1]}*`);
        }
    }
}

printDna(10);