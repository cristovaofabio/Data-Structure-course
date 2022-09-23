function isPalindrome(str) {

    if (str.length === 0) return true;

    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.split('').slice(1, str.length - 1).join(''));

}

console.log(isPalindrome('amanaplanacanalpanama'))

// let str = 'tacocat';
// // tacoca
// // acocat
// let reverseStr = str.split('').slice(0, str.length - 1).join('');
// console.log(reverseStr);

// str = str.split('').slice(1);
// console.log(str.reverse('').join('') === reverseStr);
