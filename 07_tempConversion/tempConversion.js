const convertToCelsius = function(farenheit) {
  let celsiusTemp = 0;

  return celsiusTemp = Math.round(((farenheit - 32) * (5 / 9)) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let farenheitTemp = 0;

  return farenheitTemp = Math.round((celsius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
