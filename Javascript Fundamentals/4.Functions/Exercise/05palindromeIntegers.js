function palindromeIntegers(numbers) {
  const isPalindrome = (integer) => {
    const integerLength = integer.length;

    let reversedString = integer.toString().split('').reverse().join('');
    let reversedInt = Number(reversedString);

    if (integer === reversedInt) {
      return true;
    } else {
      return false;
    }
  };

  let numbersLength = numbers.length;


  for (let i = 0; i < numbersLength; i++) {
    const integer = numbers[i];
    console.log(isPalindrome(integer));
  }
}

palindromeIntegers([123, 323, 421, 121]);
