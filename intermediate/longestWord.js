// Challenge: Write a function that takes a sentence as input and returns the longest word in the sentence.

function longestWord(sentence){
    const word = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        if(element.length > longest.length){
             longest=element;
        }
    }

    return longest;
}

console.log(longestWord('I love programming'));