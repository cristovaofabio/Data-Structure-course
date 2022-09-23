function fib(position) {
    if (position <= 2) return 1;

    return fib(position - 1) + fib(position - 2);
}

console.log(fib(10));