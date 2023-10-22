// Challenge: Write a function that takes a string as input and returns a new string with vowels removed and all consonants converted to uppercase.

function manipulateString(str) {
    const vowels = 'aeiouAEIOU';
    const consonants = str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('')
        .toUpperCase();
    return consonants;
}

console.log(manipulateString("Hello world"));