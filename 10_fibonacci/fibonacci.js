const fibonacci = function(num) {
    let number = parseInt(num);
    if (number < 0){
        return "OOPS";
    };
    let sequence = [1, 1];
    while(sequence.length < number){
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
    };
    return sequence[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
