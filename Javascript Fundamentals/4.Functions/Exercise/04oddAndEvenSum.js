function oddAndEvenSum(number) {
  const numbersString = number.toString().split('')
  const numbers = numbersString.map(Number);

  let oddSum = function (array){
    let oddSum = 0;
    let arrayL = array.length;
    for (let i = 0; i < arrayL; i++) {
      if (array[i] % 2 === 1) {
        oddSum += numbers[i];
      }
    }
    return oddSum;
  };

  const evenSum = array => {
    let evenSum = 0;
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        if (array[i] % 2 === 0) {
          evenSum += array[i];
        }
    }
    return evenSum;
  }

  console.log(`Odd sum = ${oddSum(numbers)}, Even sum = ${evenSum(numbers)}`);
}

oddAndEvenSum(3495892137259234);
