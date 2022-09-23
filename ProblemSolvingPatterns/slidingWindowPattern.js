// function maxSubarraySum(arr, n) {
//     let maxSum = null;

//     for (let i = n; i <= arr.length; i++) {
//         let sum = arr.slice(i - n, i).reduce((a, b) => { return a + b }, 0);

//         if (!maxSum) {
//             maxSum = sum;
//         } else if (maxSum < sum) {
//             maxSum = sum;
//         }
//     }

//     return maxSum;
// }

function maxSubarraySum(arr, n) {
    let maxSum = arr.slice(0, n).reduce((a, b) => { return a + b }, 0);
    let tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3));