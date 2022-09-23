function capitalizeFirst(arr) {
    const words = [];

    function wordsArr(array) {
        if (array.length === 0) return;

        let word = array[0].split('');
        let firsLetter = word[0].toUpperCase();
        word[0] = firsLetter;
        array[0] = word.join('');

        words.push(array[0]);

        wordsArr(array.slice(1));
    }

    wordsArr(arr);

    return words;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));

// let arr = 'house';
// let firsLetter = arr.split('')[0].toUpperCase();
// arr = arr.split('');
// arr[0] = firsLetter;
// console.log(arr.join(''));