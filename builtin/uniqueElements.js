// Challenge: Write a function that takes an array and returns a new array containing only the unique elements (remove duplicates).

function unique(array) {
    return Array.from(new Set(array))
}

console.log(unique([1, 2, 3,3,4,2]));