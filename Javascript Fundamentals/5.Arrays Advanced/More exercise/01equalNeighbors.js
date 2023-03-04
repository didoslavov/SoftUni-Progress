function equalNeighbors(matrix) {
    let pairCount = 0;
    let matrixLength = matrix.length;

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < matrixLength - 1) {
                if (matrix[i][j] === matrix[i+1][j]){
                    pairCount++;
                }
            }
            if (j < matrix[i].length) {
                if (matrix[i][j] === matrix[i][j+1]){
                    pairCount++;
                }
            }
        }
    }
    console.log(pairCount);
}

equalNeighbors
([['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]);