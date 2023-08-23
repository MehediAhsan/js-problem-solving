// Write a function that takes a number as input and returns its reverse.

function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed * Math.sign(num);
}

console.log(reverseNumber(-12345));
