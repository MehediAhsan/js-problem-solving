// Challenge: Write a function that takes an array of numbers and returns a new array with the elements in reverse order, sorted in ascending order, and squared.

function manipulateArray(arr){
    const reversed = arr.reverse();
    const sorted = reversed.sort((a, b) => a-b);
    const squared = sorted.map(num => num*num);
    return squared;
}

console.log(manipulateArray([8,2,3,4,5]));