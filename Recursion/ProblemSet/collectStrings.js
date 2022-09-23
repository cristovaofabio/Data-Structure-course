function collectStrings(obj) {
    const strings = [];

    function collect(obj) {

        for (let key in obj) {
            let elem = obj[key];
            if (typeof elem === 'string') {
                strings.push(elem);
            } else {
                collect(elem);
            }
        }
    }

    collect(obj);

    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));