const removeFromArray = function(arr, ...params) {
    
    return arr.filter((n) => !params.includes(n))
}

// Do not edit below this line
module.exports = removeFromArray;
