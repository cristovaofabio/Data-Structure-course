function merge(arr1, arr2) {
    let join = [];
    let firstIndex = 0;
    let secondIndex = 0;

    while (firstIndex < arr1.length && secondIndex < arr2.length) {
        if (arr1[firstIndex] < arr2[secondIndex]) {
            join.push(arr1[firstIndex]);
            firstIndex++;
        } else {
            join.push(arr2[secondIndex]);
            secondIndex++;
        }
    }

    if (firstIndex !== arr1.length) {
        join = join.concat(arr1.slice(firstIndex));
    }

    if (secondIndex !== arr2.length) {
        join = join.concat(arr2.slice(secondIndex));
    }

    return join;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let half = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, half);
    let secondHalf = arr.slice(half);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([10, 24, 76, 73]));

// let num = [1,2,3];
// let join = [5,6];
// join = join.concat(num);

// console.log(join);