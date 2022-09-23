const sum = (n) => {
    return (n + 1) * (n / 2);
}

const sum2 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let t1 = performance.now();
console.log(sum(100000000));
let t2 = performance.now();

console.log(`Time: ${(t2 - t1) / 1000} seconds`);

t1 = performance.now();
console.log(sum2(100000000));
t2 = performance.now();

console.log(`Time: ${(t2 - t1) / 1000} seconds`);