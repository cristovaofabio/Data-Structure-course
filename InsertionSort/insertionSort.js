// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let index = i;
//         while (index !== 0 && (arr[index] < arr[index - 1])) {
//             let temp = arr[index - 1];
//             arr[index - 1] = arr[index];
//             arr[index] = temp;
//             index--;
//         }
//     }
//     return arr;
// }

function insertionSort(arr) {
    for (let current = 1; current < arr.length; current++) {
        let previous = current - 1;

        while (previous >= 0 && (arr[current] < arr[previous])) {
            previous--;
        }

        previous++;
        if (previous == current) continue;
        
        let temp = arr[current];
        arr.splice(current, 1);
        arr.splice(previous, 0, temp);
    }

    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

// let array = [1, 4, 3, 6];
// array.splice(1, 1);
// console.log(array);