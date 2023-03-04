function sumOfElementsOfArray(numbers) {
  let firstElement = numbers[0];
  let lastElement = numbers[numbers.length - 1];

  let sumOfElements = firstElement + lastElement;

  console.log(sumOfElements);
}

sumOfElementsOfArray([10, 17, 22, 33]);
