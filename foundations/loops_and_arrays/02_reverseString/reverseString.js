const reverseString = function(str) {
    let arr = [];
    let res = "";

    for (let c of str) {
        arr.unshift(c);
    }

    res = arr.join("");
    return res;
};

// Do not edit below this line
module.exports = reverseString;
