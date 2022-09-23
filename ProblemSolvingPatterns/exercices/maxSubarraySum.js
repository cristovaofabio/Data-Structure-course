function maxSubarraySum(arr, n) {
    if (arr.length < n) return null;

    let sum = arr.slice(0, n).reduce((a, b) => {
        return a + b;
    }, 0);

    let newSum = sum;

    for (let i = n; i < arr.length; i++) {
        newSum = newSum - arr[i - n] + arr[i];
        
        if (newSum > sum) {
            sum = newSum;
        }
    }

    return sum;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));