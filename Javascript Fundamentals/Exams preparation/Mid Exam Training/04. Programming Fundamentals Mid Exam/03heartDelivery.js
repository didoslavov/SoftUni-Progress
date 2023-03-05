function heartDelivery(input) {
  const neighborhood = input
    .shift()
    .split('@')
    .map((x) => Number(x));
  let lastIndex = 0;
  let line = input.shift();

  while (line !== 'Love!') {
    let startIndex = Number(line.split(' ')[1]) + lastIndex;
    const isInRange = startIndex >= 0 && startIndex < neighborhood.length;

    if (!isInRange) {
      startIndex = 0;
    }

    if (neighborhood[startIndex] !== 0) {
      neighborhood[startIndex] -= 2;

      if (neighborhood[startIndex] === 0) {
        console.log(`Place ${startIndex} has Valentine's day.`);
      }
    } else {
      console.log(`Place ${startIndex} already had Valentine's day.`);
    }

    lastIndex = startIndex;
    line = input.shift();
  }
  console.log(`Cupid's last position was ${lastIndex}.`);

  let jobDone = neighborhood.every((x) => x === 0);
  if (jobDone) {
    console.log('Mission was successful.');
  } else {
    let houseCount = 0;
    neighborhood.forEach((house) => {
      if (house > 0) {
        houseCount++;
      }
    });
    console.log(`Cupid has failed ${houseCount} places.`);
  }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
console.log('--------------');
heartDelivery([
  '2@4@2',
  'Jump 2',
  'Jump 2',
  'Jump 8',
  'Jump 3',
  'Jump 1',
  'Love!',
]);
