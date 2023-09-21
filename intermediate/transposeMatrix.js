// Challenge: Write a function that takes a 2D matrix as input and returns its transpose (rows become columns and vice versa).

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transposed = [];
    for (let j = 0; j < numCols; j++) {
        const newRow = [];
        for (let i = 0; i < numRows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

console.log(transposeMatrix([[1, 2, 3], [4, 5, 6]]));
