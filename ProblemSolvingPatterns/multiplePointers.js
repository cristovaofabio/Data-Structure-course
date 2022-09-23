// function countUniqueValue(array) {
//     const unique = [];

//     array.forEach(element => {
//         if (unique.indexOf(element) === -1) unique.push(element);
//     });

//     return unique.length;
// }

function countUniqueValues(arr) {
    if (arr.length <= 1) return arr.length;
    const unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (unique[unique.length - 1] !== arr[i]) unique.push(arr[i]);
    }

    return unique.length;
}

console.log(countUniqueValues([1, 1, 1, 2]));