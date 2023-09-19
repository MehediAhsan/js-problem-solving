// Challenge: Write a function that takes two strings as input and returns true if they are isomorphic (i.e., the characters in one string can be mapped to the characters in the other string).

function areIsomorphic(str1, str2) {
    if (str1.length !== str2.length) return false;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (map1.has(str1[i]) && map1.get(str1[i]) !== str2[i]) return false;
        if (map2.has(str2[i]) && map2.get(str2[i]) !== str1[i]) return false;
        map1.set(str1[i], str2[i]);
        map2.set(str2[i], str1[i]);
    }
    return true;
}

console.log(areIsomorphic("egg", "add")); 
