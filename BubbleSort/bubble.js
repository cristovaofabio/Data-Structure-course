// function swap(p1, p2, arr) {
//     let temp = arr[p1];
//     arr[p1] = arr[p2];
//     arr[p2] = temp;

//     return arr;
// }

// function bubbleSort(arr) {
//     let noSwaps;
//     let i = arr.length - 1;

//     while (i >= 0) {
//         noSwaps = true;

//         for (let j = 0; j <= i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr = swap(j, j + 1, arr);
//                 noSwaps = false;
//             }
//         }

//         if (noSwaps) break;
//         i--;
//     }

//     return arr;
// }

function bubbleSort(arr) {
    let noSwaps;
    let i = arr.length - 1;

    while (i >= 0) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                noSwaps = false;
            }
        }

        if (noSwaps) break;
        i--;
    }

    return arr;
}

console.log(bubbleSort([1, 5, 3, 8, 9, 3]));
// console.log(bubbleSort([1, 2, 3, 4, 5, 6]));