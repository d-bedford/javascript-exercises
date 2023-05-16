const repeatString = function(word, num_times) {
    let words = [];
    for(let i=0; i<num_times; i++){
      words[i] = word;
    }
    if (num_times < 0){
        return "ERROR";
    }
    return words.join("");
};

// Do not edit below this line
module.exports = repeatString;
