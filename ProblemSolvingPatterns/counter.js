function same(array1, array2) {
    let frequency = {}
    let frequency2 = {}

    array1.forEach(i => {
        frequency[i ** 2] = (frequency[i ** 2] || 0) + 1;
    });

    array2.forEach(i => {
        frequency2[i] = (frequency2[i] || 0) + 1;
    });

    let equal = true;

    Object.keys(frequency).forEach(key => {
        if (frequency2[key] !== frequency[key]) {
            equal = false;
            return;
        }
    });
    return equal;
}

console.log(same([1, 1, 2, 2, 3], [1, 1, 4, 4, 9]));