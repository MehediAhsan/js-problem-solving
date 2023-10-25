const string = "My Name is Mehedi Ahsan";

const reverseBySeperator = (string, separator) => {
    return string.split(separator).reverse().join(separator);
}

let reverseString = reverseBySeperator(string, "");

let reverseWord = reverseBySeperator(reverseString," ");

console.log(reverseWord)