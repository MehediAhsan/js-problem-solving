function findMissingNumber(arr, n) {
    // Calculate the expected sum of numbers from 1 to N
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of numbers in the array
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // Calculate and return the missing number
    return expectedSum - actualSum;
}

const missingNumber = findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8);
console.log(missingNumber); 
