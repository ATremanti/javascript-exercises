const fibonacci = function (index) {
    if (index < 0) {
        return "OOPS"
    } else {
        let first = 0
        let next = 1

        for (i = 1; i < index; i++) {
            let temp = next
            next = first + next
            first = temp
        }
        return next
    }
};

// Do not edit below this line
module.exports = fibonacci;
