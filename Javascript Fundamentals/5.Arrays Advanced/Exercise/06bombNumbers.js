function bombNumbers(numbersSequance, bombNumberInfo) {
  const bombNumber = bombNumberInfo[0];
  const bombNumberPower = bombNumberInfo[1];

  while (numbersSequance.includes(bombNumber)) {
    let bombNumberIndex = numbersSequance.indexOf(bombNumber);
    let startingIndex = bombNumberIndex - bombNumberPower;
    let elementsToRemove = bombNumberPower * 2 + 1;
    if (startingIndex < 0) {
      elementsToRemove += startingIndex;
      startingIndex = 0;
    }
    numbersSequance.splice(startingIndex, elementsToRemove);
  }
  let result = 0;

  numbersSequance.map((a) => (result += a));

  console.log(result);
}

bombNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);
