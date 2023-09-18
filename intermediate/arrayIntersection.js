// Challenge: Write a function that takes two arrays as input and returns an array containing the intersection of the two arrays (i.e., elements that are present in both arrays).

function arrayIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
