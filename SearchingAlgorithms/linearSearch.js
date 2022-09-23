function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;
}

console.log(search([7, 3, 9, 0, 5], 45));