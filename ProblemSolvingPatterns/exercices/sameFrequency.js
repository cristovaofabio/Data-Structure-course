function sameFrequency(firstNumber, secondNumber) {
    const n1 = firstNumber + '';
    const n2 = secondNumber + '';
    const frequency = {}

    n1.split('').forEach((digit) => {
        frequency[digit] = (frequency[digit] || 0) + 1;
    });

    for (let i = 0; i < n2.length; i++) {
        if (!frequency[n2[i]] || frequency[n2[i]] === 0) {
            return false;
        }
        frequency[n2[i]]--;
    }

    return true;
}

console.log(sameFrequency(22,222));