const palindromes = function (string) {
    let letters_backwards = [];
    let letters = []
    let words_split = string.split(" ");
    let joined_words = words_split.join("");
    for (let i = joined_words.length; i >=0; i--){
        if(joined_words.charAt(i).toUpperCase() != joined_words.charAt(i).toLowerCase()) {
            letters_backwards.push(joined_words.charAt(i));
        };
    };
    for (let letter of joined_words){
        if(letter.toUpperCase() != letter.toLowerCase()) {
            letters.push(letter);
        };
    };
    
    if ((letters_backwards.join("")).toLowerCase() === (letters.join("")).toLowerCase()){
        
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
