var BigMath = {};


let i = 1n;
let x = 3n * (10n ** 100020n);
let pi = x;
while (x > 0) {
    x = x * i / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
}
//console.log(pi / (10n ** 20n));

BigMath.PiDigits = '' + pi / (10n ** 20n);


function isPalindrome(str) {
    if (str.length === 0) return true;

    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.split('').slice(1, str.length - 1).join(''));
}

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function primeAndPalindrome(pi) {
    pi = pi + '';
    let array = pi.split('');

    for (let i = 2; i < pi.length; i++) {
        let numbers = array.slice(i, i + 9).join('');
        if (numbers.length < 3) {
            return;
        }
        if (isPalindrome(numbers)) {
            if (isPrime(Number(numbers))) {
                console.log(numbers);
                return;
            }
        }

    }
}

primeAndPalindrome(BigMath.PiDigits);

// console.log(isPalindrome(BigMath.PiDigits.split('').slice(2,5).join('')));