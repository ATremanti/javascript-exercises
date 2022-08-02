const findTheOldest = function(arr) {
    return arr.reduce((personA, personB) => {
        const ageA = getAge(personA.yearOfDeath, personA.yearOfBirth)
        const ageB = getAge(personB.yearOfDeath, personB.yearOfBirth)
        return ageA > ageB ? personA : personB
    })

};


const getAge = (deathYear, birthYear) => {
    if (!deathYear) {
        deathYear = new Date().getFullYear()
    }
    return deathYear - birthYear
}

// Do not edit below this line
module.exports = findTheOldest;
