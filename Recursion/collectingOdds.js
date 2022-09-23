function collectOdds(numbers) {
    const odds = [];

    function helper(arr) {
        if (arr.length === 0) return;
        if (arr[0] % 2 !== 0) odds.push(arr[0]);

        helper(arr.slice(1));
    }

    helper(numbers);

    return odds;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
