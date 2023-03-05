function liftQueue(initialInfo) {
  let queue = Number(initialInfo.shift());
  let lifts = initialInfo
    .shift()
    .split(' ')
    .map((x) => Number(x));
  const liftsLength = lifts.length;
  let isFull = false;

  for (let i = 0; i < liftsLength; i++) {
    let currentWagon = lifts[i];

    for (let j = currentWagon; j < 4; j++) {
      if (queue < 1) {
        break;
      }
      queue--;
      currentWagon++;
    }
    lifts[i] = currentWagon;
  }

  for (const places of lifts) {
    if (places >= 4) {
      isFull = true;
    } else {
      isFull = false;
    }
  }

  if (isFull && queue < 1) {
    console.log(lifts.join(' '));
  } else if (isFull) {
    console.log(`There isn't enough space! ${queue} people in a queue!`);
    console.log(lifts.join(' '));
  } else {
    console.log(`The lift has empty spots!`);
    console.log(lifts.join(' '));
  }
}

liftQueue(['12', '4 4 0 0 0']);
