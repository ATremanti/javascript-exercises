const reverseString = function(string) {
    const tempArray = []
    for (i = 0; i < string.length; i++) {
        tempArray.push(string.charAt(i))
    }
    return tempArray.reverse().join("")   
};

// Do not edit below this line
module.exports = reverseString;
