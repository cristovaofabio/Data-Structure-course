function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        
        if (smallest !== i) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([0, 2, 5, 1, 7, 3, 9, 0]));