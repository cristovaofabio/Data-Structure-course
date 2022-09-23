// function countWords(str, word) {
//     let size = str.length;
//     let newSize = str.replaceAll(word, '').length;
//     return (size - newSize) / word.length;
// }

function countWords(str, word) {
    let counter = 0;
    let countWordSize = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === word[countWordSize]) {
            countWordSize++;
            if (countWordSize === word.length) {
                counter++;
                countWordSize = 0;
            }
        } else {
            countWordSize = 0;
        }
    }

    return counter;
}

console.log(countWords('harold said hello said said in hamburg', 'said'));