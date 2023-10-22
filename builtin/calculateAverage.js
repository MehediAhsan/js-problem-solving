// Challenge: Write a function that takes an array of numbers as input and returns the average (mean) of the numbers.

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
