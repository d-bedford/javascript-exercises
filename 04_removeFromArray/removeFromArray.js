const removeFromArray = function(inputArray, ...args) {
    
    args.forEach((arg) =>{
        let index = inputArray.indexOf(arg);
        if (index>-1){
            inputArray.splice(index, 1);
        }
    });
    
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
