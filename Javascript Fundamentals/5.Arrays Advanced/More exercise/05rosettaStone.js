function rosettaStone(input) {
    const templateRows = Number(input.shift());
    const templateMatrix = [];
    
    for (let i = 0; i < templateRows; i++) {
        let currentRow = input.shift().split(' ');
            currentRow = currentRow.map(Number)
        templateMatrix.push(currentRow);
    }

    const encodedMatrix = input.map((row) => row.split(' ').map((x) => Number(x)));
    
    const letterDecipher = letterCipher => {
        let num = letterCipher;
        if (letterCipher >= 27) {
            num = letterCipher % 27;
        }

        let letter = ' ';

        if (num > 0) {
            letter = String.fromCharCode(num + 64);
        }
        return letter
    }

    let message = '';

    for (let row = 0; row < encodedMatrix.length; row++) {
        for (let col = 0; col < encodedMatrix[0].length; col++) {
            let codeCipher = encodedMatrix[row][col];
            let codeDecipher = templateMatrix[row % templateRows][col % templateMatrix[0].length];
            let currentLetterCode = codeCipher + codeDecipher;

            message += letterDecipher(currentLetterCode);
        }
    }
    console.log(message);
}

rosettaStone([ '2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ]
);