function validityChecker(x1, y1, x2, y2) {
  const isValid = (x1, y1, x2, y2) => Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)));

  if (isValid(x1, y1, 0, 0)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (isValid(x2, y2, 0, 0)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
} else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (isValid(x1, y1, x2, y2)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

validityChecker(3, 0, 0, 4);
console.log('---------');
validityChecker(2, 1, 1, 1);
