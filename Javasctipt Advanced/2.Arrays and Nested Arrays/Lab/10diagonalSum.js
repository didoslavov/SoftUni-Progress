function sumDiagonalOfMatrix(matrix) {
    let mainDiagonalSum = 0 
    let secondaryDiagonalSum = 0;
    const matrixLength = matrix.length;

    for (let row = 0; row < matrixLength; row++) {
        mainDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][matrixLength - row - 1];
    }
    
    return [mainDiagonalSum, secondaryDiagonalSum].join(' ')
}

console.log(sumDiagonalOfMatrix([[20, 40],
    [10, 60]]));
console.log('-----------');
console.log(sumDiagonalOfMatrix([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));