function race(input) {
  const names = input.shift().split(', ');
  const finalists = {};
  let index = 0;
  let line = input[index];

  while (line !== 'end of race') {
    let name = getName(line);
    const isInList = names.includes(name);

    if (isInList) {
      const distance = getDistance(line);
      if (!finalists.hasOwnProperty(name)) {
        finalists[name] = distance;
      } else {
        finalists[name] += distance;
      }
    }
    index++;
    line = input[index];
  }

  const racers = sortRacers(finalists);

  printResult(racers);

  function printResult(racers) {
    console.log(`1st place: ${racers[0][0]}`);
    console.log(`2nd place: ${racers[1][0]}`);
    console.log(`3rd place: ${racers[2][0]}`);
  }

  function sortRacers(racers) {
    const racersArr = Object.entries(racers);
    const sortedRacers = racersArr.sort((a, b) => b[1] - a[1]);
    return sortedRacers;
  }

  function getName(string) {
    const regex = /[A-Za-z]+/g;
    const name = string.match(regex).join('');
    return name;
  }

  function getDistance(string) {
    const regex = /\d/g;
    let sum = 0;
    string.match(regex).forEach((digit) => {
      sum += Number(digit);
    });
    return sum;
  }
}

race([
  'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
  'Mi*&^%$ch123o!#$%#nne787) ',
  '%$$B(*&&)i89ll)*&) ',
  'R**(on%^&ald992) ',
  'T(*^^%immy77) ',
  'Ma10**$#g0g0g0i0e',
  'end of race',
]);
