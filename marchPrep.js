// Given the N*M matrix, find a given number in the matrix
// All rows are sorted, each rows first element is less than the previous row last element


// [  1,  3,  5,  7,  9]
// [ 11, 13, 15, 16, 20]
// [ 21, 22, 23, 24, 25]
// [ 30, 32, 35, 40, 45]

// Find: 23

const findNumber = (matrix, target) => {
  let low = 0;
  let high = matrix.length * matrix[0].length - 1;
  while (low <= high) {

    let mid = low + Math.floor((high - low) / 2);
    let row = Math.floor(mid / matrix.length) - 1; // -1 for 0th index
    if (row < 0) {
      row = 0;
    }
    let col = mid % matrix[0].length;

    if (matrix[row][col] === target) {
      console.log("Found: " + matrix[row][col] + " at " + row + ", " + col);
      return;
    }
    else if (matrix[row][col] < target) {
      low = mid + 1;
    }
    else { // the mid was greater than target
      high = mid - 1;
    }
  }
  console.log("Number does not exist in matrix");
}

const matrix = [
    [  1,  3,  5,  7,  9],
    [ 11, 13, 15, 16, 20],
    [ 21, 22, 23, 24, 25],
    [ 30, 32, 35, 40, 45],
  ];

findNumber(matrix, 23);
findNumber(matrix, 1);
findNumber(matrix, 45);