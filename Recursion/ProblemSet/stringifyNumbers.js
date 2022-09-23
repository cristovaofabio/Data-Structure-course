function stringifyNumbers(o) {

    let obj = { ...o };

    function check(obj) {
        for (let key in obj) {
            let element = obj[key];

            if (typeof element === 'number') {
                obj[key] = element + "";
            } else if (typeof element === 'object') {
                check(element);
            }
        }
    }

    check(obj);

    return obj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/