function areThereDuplicates(...args) {
    const frequency = {};

    for (let i = 0; i < args.length; i++) {
        if (frequency[args[i]]) return true;
        frequency[args[i]] = 1;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 2));