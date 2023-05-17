const findTheOldest = function(people) {
    let oldest = 0;
    const date = new Date();
    for (let person of people){
        let age = person["yearOfDeath"] - person["yearOfBirth"];
        if (oldest === 0){
            if (!("yearOfDeath" in person)){
                let curr_age = date.getFullYear() - person["yearOfBirth"];
                person["age"] = curr_age;
            }
            oldest = person;
        }
        else if ((oldest["yearOfDeath"] - oldest["yearOfBirth"]) < age || oldest["age"] < age){
            oldest = person;
        };
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
