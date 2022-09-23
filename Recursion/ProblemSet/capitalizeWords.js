function capitalizeWords(arr) {
    const newArray = [];

    function words(array) {
        if (array.length === 0) return;
        newArray.push(array[0].toUpperCase());
        words(array.slice(1));
    }

    words(arr);

    return newArray;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));