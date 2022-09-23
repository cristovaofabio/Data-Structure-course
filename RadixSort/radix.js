function digitCount(num) {
    return (num + '').length;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function mostDigits(arr) {
    let bigger = 0;

    for (let i = 0; i < arr.length; i++) {
        bigger = Math.max(digitCount(arr[i]), bigger);
    }

    return bigger;
}

function radixSort(arr) {
    let largest = mostDigits(arr);
    let buckets = {}

    for (let position = 0; position < largest; position++) {
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], position);

            if (buckets[digit]) {
                buckets[digit].push(arr[i])
            } else {
                buckets[digit] = [arr[i]];
            }
        }

        arr = [];
        for (let key in buckets) {
            arr = arr.concat(buckets[key]);
        }
        buckets = {}
    }

    return arr;
}

// console.log(getDigit(12345, 4));
// console.log(digitCount(1));

// console.log(mostDigits([1234, 56, 7]));

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));