//If all in numbers of first array has square in second array
//Naive
function sameNaive(arr1, arr2)
{
    if (arr1.length !== arr2.length) return false

    for (let num of arr1)
    {
        let correctIndex = arr2.indexOf(num * num);
        if (correctIndex === -1) return false
        arr2.splice(correctIndex, 1);
    }
    return true;
}

//Optimize
function sameOptimize(arr1, arr2)
{
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1)
    {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2)
    {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1)
    {
        if (!(key * key in frequencyCounter2)) return false;
        if (frequencyCounter1[key * key] !== frequencyCounter2[key]) return false;
    }
    return true;
}

console.log(sameNaive([1, 2, 3], [4, 1, 9]));
console.log(sameNaive([1, 2, 3], [1, 9]));
console.log(sameNaive([1, 2, 1], [4, 4, 1]));
console.log(sameOptimize([1, 2, 3], [4, 1, 9]));
console.log(sameOptimize([1, 2, 3], [1, 9]));
console.log(sameOptimize([1, 2, 1], [4, 4, 1]));