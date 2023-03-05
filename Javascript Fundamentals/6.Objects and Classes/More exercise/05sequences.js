function sequences(input) {
  const numbersArr = [];

  for (const array of input) {
    const numbers = JSON.parse(array).sort((a, b) => b - a);
    numbersArr.push(numbers);
  }

  const uniqueNumbers = uniqueArrays(numbersArr).sort((a,b) => a.length - b.length);

  uniqueNumbers.forEach(array => {
    console.log(`[${array.join(', ')}]`);
  });

  function uniqueArrays(arrays) {
    const stringifyArrays = arrays.map(x => JSON.stringify(x));
    const uniqueArrays = Array.from(new Set(stringifyArrays), JSON.parse);
    return uniqueArrays;
  }
}

// sequences([
//   '[-3, -2, -1, 0, 1, 2, 3, 4]',
//   '[10, 1, -17, 0, 2, 13]',
//   '[4, -3, 3, -2, 2, -1, 1, 0]',
// ]);
// console.log('-------------');
sequences([
  '[7.14, 7.180, 7.339, 80.099]',
  '[7.339, 80.0990, 7.140000, 7.18]',
  '[7.339, 7.180, 7.14, 80.099]',
]); 
