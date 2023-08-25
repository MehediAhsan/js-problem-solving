// Write a function that takes an array as input and returns an array with all falsy values removed.

function removeFalsyValues(arr) {
    return arr.filter(value => !!value);
}

console.log(removeFalsyValues([0, 1, false, true, '', 'hello', null, undefined])); 