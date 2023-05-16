const palindromes = function (string) {
    let letters_backwards = [];
    let letters = []

    for (let i = string.length-1; i >= 0 ; i--){
        if(string.charAt(i).toUpperCase() != string.charAt(i).toLowerCase()) {
            letters_backwards.push(string.charAt(i));
        };
    };
    for (let i = 0; i <= string.length-1 ; i++){
        if(string.charAt(i).toUpperCase() != string.charAt(i).toLowerCase()) {
            letters.push(string.charAt(i));
        };
    };
    if (letters_backwards.join("") === letters.join("")){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
