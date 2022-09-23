function isSubsequence(str1, str2) {
    let size = str1.length;
    let position = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[position]) {
            position++;
        }
        if (position === size) return true;
    }

    return false;
}

console.log(isSubsequence('abc', 'acb'));