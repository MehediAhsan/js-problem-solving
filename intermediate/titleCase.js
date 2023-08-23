// Write a function that takes a sentence as input and returns the sentence in title case (the first letter of each word capitalized).

function titleCase(sentence){
    const words = sentence.split(' ');
    const titleCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return titleCaseWords.join(' ');
}

console.log(titleCase('I love programming language'));