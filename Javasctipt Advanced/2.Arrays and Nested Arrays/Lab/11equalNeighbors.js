function equalNeighbors(matrix) {
    let neighbors = 0;
    const matrixLength = matrix.length;
    for (let row = 0; row < matrixLength; row++){
        const colLength = matrix[row].length;
        
        for (let col = 0; col < colLength; col++) {
            if (row < matrixLength - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    neighbors++;
                }
            }
            if (col < colLength) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }

    return neighbors;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log('-------------');
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));