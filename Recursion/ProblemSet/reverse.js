function reverse(str) {
    if (str.length === 0) return '';
    str = str.split('');
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1).join(''))
}

// let str = 'big house';
// str = str.split('');
// console.log(str[str.length - 1], str.slice(0, str.length - 1).join(''));

console.log(reverse('Hello'));