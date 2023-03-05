function spreadLove(loveArray) {
  let neighborhood = loveArray.shift().split('@').map(Number);
  let commandLine = loveArray.shift();
  let currentHouse = 0;
  
  while (commandLine !== 'Love!') {
    const jumpLength = Number(commandLine.split(' ')[1]);
    const neighborhoodLength = neighborhood.length;
    currentHouse += jumpLength;

    if (currentHouse >= neighborhoodLength) {
      currentHouse = 0;
    }

    if (neighborhood[currentHouse] === 0) {
      console.log(`Place ${currentHouse} already had Valentine's day.`);
    } else {
      neighborhood[currentHouse] -= 2;
      if (neighborhood[currentHouse] === 0) {
        console.log(`Place ${currentHouse} has Valentine's day.`);
      }
    }

    commandLine = loveArray.shift();
  }

  console.log(`Cupid's last position was ${currentHouse}.`);

  let success = true;
  let houseCount = 0;

  for (const house of neighborhood) {
    if (house !== 0) {
      success = false;
      houseCount++;
    }
  }

  if (success) {
    console.log('Mission was successful.');
  } else {
    console.log(`Cupid has failed ${houseCount} places.`);
  }
}
spreadLove([
  '2@4@2',
  'Jump 2',
  'Jump 2',
  'Jump 8',
  'Jump 3',
  'Jump 1',
  'Love!',
]);
