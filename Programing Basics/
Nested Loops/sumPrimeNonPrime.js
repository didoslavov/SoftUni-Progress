function sumPrimeNonPrime(input) {
  index = 0;
  let command = input[index];
  let isPrime = true;
  let primeSum = 0;
  let nonPrimeSum = 0;

  while (command !== "stop") {
    let currentNumber = Number(input[index]);
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i == 0 && currentNumber > 2) {
        isPrime = false;
        break;
      }
    }
    if (currentNumber < 0) {
      console.log("Number is negative.");
    } else if (isPrime && currentNumber >= 2) {
      primeSum += currentNumber;
    } else {
      nonPrimeSum += currentNumber;
    }
    index++;
    command = input[index];
    isPrime = true;
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["stop", "-9", "0", "0"]);
