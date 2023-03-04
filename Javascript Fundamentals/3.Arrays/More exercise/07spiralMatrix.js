function spiralMatrix(rows, columns) {
    const spiralMatrix = [];

    for (let i = 0; i < rows; i++) {
        spiralMatrix.push([]);
    }

    let counter = 1;

    let startRow = 0;
    let endRow = rows - 1;
    let startColumn = 0;
    let endColumn = columns - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            spiralMatrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            spiralMatrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            spiralMatrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            spiralMatrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    
    for (let i = 0; i < rows; i++) {
        console.log(spiralMatrix.shift().join(' '));
    }
}

spiralMatrix(3, 3);