// Write a function that takes an array and a number (size) as inputs and returns an array of smaller arrays, each with a maximum length of size.

function chunkArray(arr, size){
    let chunk = [];
    for (let i = 0; i < arr.length; i=i+size) {
        chunk.push(arr.slice(i, i + size))
    }
    return chunk;
}

console.log(chunkArray([1,2,3,4,4,5,7,7,8,7],2))