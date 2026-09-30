const fibonacci = function(index) {
    index = Number(index);
    if (index < 0) {
        return "OOPS";
    } else if (index === 1 ){
        return 1;
    } else if (index === 0) {
        return 0;
    }

    return fibonacci(index - 1) + fibonacci(index - 2); 
};

// Do not edit below this line
module.exports = fibonacci;
