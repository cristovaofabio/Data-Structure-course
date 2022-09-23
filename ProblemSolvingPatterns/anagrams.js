function validAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;

    let frequency1 = {};
    str1.split('').forEach(letter => {
        frequency1[letter] = (frequency1[letter] || 0) + 1;
    });

    let frequency2 = {};
    str2.split('').forEach(letter => {
        frequency2[letter] = (frequency2[letter] || 0) + 1;
    });

    for (let key in frequency1) {
        if (frequency1[key] !== frequency2[key]) return false;
    }

    return true;
}

console.log(validAnagram('cinema', 'iceman'));