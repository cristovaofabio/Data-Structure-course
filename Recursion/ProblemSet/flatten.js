function flatten(arr) {
    const values = [];

    function checkValues(array) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === "number") {
                values.push(array[i]);
            } else {
                checkValues(array[i]);
            }
        }
    }

    checkValues(arr);

    return values;
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));

// const array = [1, 2, 3];
// console.log(typeof array);
// console.log(typeof array[0]);