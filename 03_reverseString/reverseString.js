const reverseString = function(word) {
    let letters = [];
    for (let i = word.length; i >= 0; i--){
        letters.push(word.charAt(i));
    }
    return letters.join("");
};

// Do not edit below this line
module.exports = reverseString;
