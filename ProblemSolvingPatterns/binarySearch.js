// function search(arr, val) {
//     const size = arr.length;
//     let index = Math.floor(size / 2);

//     while (true) {
//         if (arr[index] === val) return index;

//         if (index === size - 1 || index <= 0) return null;

//         if (val < arr[index]) {
//             index = Math.floor(index / 2);
//         } else {
//             index = Math.floor((index + size) / 2);
//         }
//     }
// }

function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (arr[middle] === val) return middle;

        if (arr[middle] < val) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9));