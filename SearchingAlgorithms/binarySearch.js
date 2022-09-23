function binarySearch(sortedArr, value) {
    let left = 0;
    let right = sortedArr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (sortedArr[middle] !== value && (left <= right)) {

        if (sortedArr[middle] < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

        middle = Math.floor((left + right) / 2);
    }

    return sortedArr[middle] === value ? middle : -1;
}
//0 1 2 3 4
console.log(binarySearch([1, 2, 3, 4, 5], 2));