function theLift(input) {
  let queue = Number(input.shift());
  const lift = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let isFull = false;

  for (let i = 0; i < lift.length; i++) {
    let wagon = lift[i];

    while (wagon < 4) {
      if (queue < 1) {
        break;
      }
      queue--;
      wagon++;
      lift[i] = wagon;
    }
  }

  for (const wagon of lift) {
    if (wagon >= 4) {
      isFull = true;
    } else {
      isFull = false;
    }
  }

  if (!isFull && queue < 1) {
    return `The lift has empty spots!
${lift.join(' ')}`;
  } else if (isFull && queue > 0) {
    return `There isn't enough space! ${queue} people in a queue!
${lift.join(' ')}`;
  } else if (isFull && queue < 1) {
    return lift.join(' ');
  }
}

console.log(theLift(['20', '0 0 0 0 0']));
console.log('----------------------');
console.log(theLift(['20', '0 2 0']));
