const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g,"");
    const arr = str.split("");

    while((arr.length - 1) > 1) {
        if (arr[0] !== arr[arr.length - 1]) {
            return false;
        }
        arr.pop();
        arr.shift();
    }

    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
