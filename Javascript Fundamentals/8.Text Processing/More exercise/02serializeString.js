function serializeString(input) {
    const [string] = input;
    const serializedString = {};

    for (let i = 0; i < string.length; i++) {
        if (!serializedString.hasOwnProperty(string[i])) {
            serializedString[string[i]] = [];
        }
        serializedString[string[i]].push(i);
    }
    
    for (const char in serializedString) {
        console.log(`${char}:${serializedString[char].join('/')}`);
    }
}

serializeString(["abababa"]);
console.log('------------');
serializeString(["avjavamsdmcalsdm"]);