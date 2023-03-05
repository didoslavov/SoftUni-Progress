function asciiSumator(input) {
    const [startingChar, endingChar, string] = input;
    const startingIndex = Math.min(startingChar.charCodeAt(), endingChar.charCodeAt());
    const endingIndex = Math.max(startingChar.charCodeAt(), endingChar.charCodeAt());

    let sum = 0;

    for (const char of string) {
        const isValidChar = char.charCodeAt() > startingIndex && char.charCodeAt() < endingIndex ? true : false;
        
        if (isValidChar) {
            sum += char.charCodeAt();
        }
    }

    console.log(sum); 
}

asciiSumator(['.',
'@',
'dsg12gr5653feee5']);
console.log('------------');
asciiSumator(['?',
'E',
'@ABCEF']
);
console.log('------------');
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$'])