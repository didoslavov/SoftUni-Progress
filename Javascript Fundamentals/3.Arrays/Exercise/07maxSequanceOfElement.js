function maxSequence(numbers) {
    let maxSequenceArray = [];
    let numbersLength = numbers.length;
    let leftMaxIndex = 0;
  
    for (let i = 0; i < numbersLength; i++) {
      let currentElement = Number(numbers[i]);
      let currentSequence = [currentElement];
  
      for (let j = i + 1; j <= numbersLength; j++) {
        let nextElement = Number(numbers[j]);
        if (currentElement == nextElement) {
          currentSequence.push(nextElement);
        } else {
          break;
        }
      }
      if (currentSequence.length > maxSequenceArray.length) {
        maxSequenceArray = [];
        for (let k = 0; k < currentSequence.length; k++) {
          maxSequenceArray.push(currentSequence[k]);
        }
      } else if (currentSequence.length === maxSequenceArray.length) {
        if (i < leftMaxIndex) {
          leftMaxIndex = i;
        }
      }
    }
    console.log(maxSequenceArray.join(" "));
  }

maxSequance([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);