const ftoc = function (tempF) {
  const tempC = Math.round((tempF - 32) * 5 / 9 * 10) / 10
  return tempC
};

const ctof = function (tempC) {
  const tempF = Math.round((tempC * (9 / 5) + 32) * 10) / 10
  return tempF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
