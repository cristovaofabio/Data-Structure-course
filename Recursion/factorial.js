function fact(number) {
    if (number <= 1) return 1;
    return number * fact(number-1);
}

let value = fact(5);
console.log(value);