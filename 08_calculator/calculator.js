const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, next) => total + next, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, next) => total * next, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
