function equalArrays(firstArray, secondArray) {
  firstArray.map(Number);
  secondArray.map(Number);

  let isEqual = true;
  let sumOfFirstArray = 0;

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      isEqual = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else {
      sumOfFirstArray += firstArray[i];
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sumOfFirstArray}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
