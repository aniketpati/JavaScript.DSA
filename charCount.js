function charCount(input)
{
    let result = {};
    input = input.toLowerCase();
    for (let c of input)
    {
        if (!/[a-z0-9]/.test(c))
        {
            continue;
        }
        if (result[c] == undefined)
        {
            result[c] = 1;
        }
        else
        {
            result[c]++;
        }
    }
    return result;
}
console.log(charCount("test"));
console.log(charCount("I am a good boy"));
console.log(charCount("     oooppp"));
console.log(charCount("    !!&*aniket"));