const sumAll = function (high, low) {
    let total = 0

    if (high < 0 || low < 0 || typeof (high) !== "number" || typeof (low) !== "number") {
        return "ERROR"
    } else {
        if (low > high) {
            let y = low
            low = high
            high = y
        }
        do {
            total += high--
        } while (high !== low)
    }
    return total + low
};

// Do not edit below this line
module.exports = sumAll;
