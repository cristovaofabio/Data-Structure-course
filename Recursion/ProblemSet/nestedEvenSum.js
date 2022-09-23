function nestedEvenSum(obj) {
    let sum = 0;

    function checkObj(object) {
        for (let key in object) {
            let element = object[key];

            if (typeof element === 'number' && element % 2 === 0) {
                sum += element;
            } else if (typeof element === 'object') {
                checkObj(element);
            }
        }
    }

    checkObj(obj);

    return sum;
}

let obj1 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

console.log(nestedEvenSum(obj1));

// let obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: 'car' }
// };

// for (let key in obj2) {
//     console.log(key, typeof obj2[key]);
// }