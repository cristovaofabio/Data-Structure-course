function averagePair(arr, average) {
    if (arr.length === 2) return arr.length === average;

    let firstPosition = 0;
    let lastPosition = arr.length - 1;

    while (firstPosition < lastPosition) {
        let result = (arr[firstPosition] + arr[lastPosition]) / 2;

        if (result === average) {
            return true;
        } else if (result > average) {
            lastPosition--;
        } else {
            firstPosition++;
        }
    }

    return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))