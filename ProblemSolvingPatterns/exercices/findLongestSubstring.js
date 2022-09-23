function findLongestSubstring(str) {
    const element = {};
    let startPosition = 0;
    let size = 0;

    for (let i = 0; i < str.length; i++) {
        if (element[str[i]] === undefined) {
            element[str[i]] = i;
        } else {
            if ((element[str[i]] + 1) > startPosition) {
                startPosition = element[str[i]] + 1;
                console.log(startPosition);
            }
            element[str[i]] = i;
        }
        size = str.length - startPosition + 1;
    }

    console.log(element);
    return size;
}

//abcabcde
//0123456789
//thisisawesome
console.log(findLongestSubstring('longestsubstring'));

