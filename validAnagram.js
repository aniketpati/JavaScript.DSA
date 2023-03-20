function validAnagram(str1, str2)
{
    if (str1.length !== str2.length) return false;
    const lookup = {};
    for (let char of str1)
    {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    for (let char of str2)
    {
        if (!lookup[char]) return false;
        else lookup[char] -= 1;
    }
    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'cat'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));