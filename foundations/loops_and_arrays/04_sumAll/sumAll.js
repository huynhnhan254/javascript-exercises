const sumAll = function(first, last) {
    if (!Number.isInteger(first) || !Number.isInteger(last) || first < 0 || last < 0) {
        return "ERROR";
    }

    if (first > last) {
        const temp = first;
        first = last;
        last = temp;
    }

    let res = 0;
    for (let i = first; i <= last; i++) {
        res += i;
    }

    return res;

};

// Do not edit below this line
module.exports = sumAll;
