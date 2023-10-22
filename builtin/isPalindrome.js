// Challenge: Write a function that takes a string as input and returns true if it's a palindrome and false otherwise (case insensitive and ignore non-alphanumeric characters).

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));