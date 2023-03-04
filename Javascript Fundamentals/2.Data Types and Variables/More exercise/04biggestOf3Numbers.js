function biggestof3Numbers(firstNumber, secondNumber, thirdNumber) {
  const arrayOfNumbers = [firstNumber, secondNumber, thirdNumber];
  const biggestNumber = arrayOfNumbers.sort((a,b) => b - a).shift();

  console.log(biggestNumber);
}

biggestof3Numbers(-2, 7, 3);
