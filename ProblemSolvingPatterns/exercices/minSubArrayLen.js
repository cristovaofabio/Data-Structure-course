function minSubArrayLen(arr, number) {
    let size = arr.length;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) return 1;
    }
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7)