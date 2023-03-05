function orbit(input) {
    const width = input.shift();
    const heigth = input.shift();
    const matrix = [];

    for (let i = 0; i < width; i++) {
            matrix.push([]);
    }
    
    const x = input.shift();
    const y = input.shift();

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < heigth; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }
    console.log(matrix.map((arr) => arr.join(' ')).join('\n'));
}

orbit([4,4,0,0]);