function roundToSpecificPrecision(number, rawPrecision) {
  let precision = rawPrecision;

  if (precision > 15) {
    precision = 15;
  }

  let printResult = number.toFixed(precision);

  console.log(parseFloat(printResult));
}

roundToSpecificPrecision(10.5, 3);
