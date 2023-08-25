// Write a function that takes an array of strings as input and groups anagrams together.

function groupAnagrams(words){
    const anagramGroups = {};
    for (let word of words) {
        const sorted = word.split('').sort().join('');
        if (!anagramGroups[sorted]) {
            anagramGroups[sorted] = [word];
        } else {
            anagramGroups[sorted].push(word);
        }
    }
    return Object.values(anagramGroups);
}

console.log(groupAnagrams(['hi','ih','tall','alt']));