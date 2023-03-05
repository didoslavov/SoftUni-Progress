function movingTargets(input) {
  const targets = input
    .shift()
    .split(' ')
    .map((x) => Number(x));
  let line = input.shift();

  while (line !== 'End') {
    let [command, index, pvr] = line.split(' ');
    index = Number(index);
    pvr = Number(pvr);
    const isValid = index >= 0 && index < targets.length;

    switch (command) {
      case 'Shoot':
        if (!isValid) {
          line = input.shift();
          continue;
        }
        shoot(index, pvr, targets);
        break;
      case 'Add':
        if (!isValid) {
          console.log('Invalid placement!');
          line = input.shift();
          continue;
        }
        add(index, pvr, targets);
        break;
      case 'Strike':
        const isInRange = index - pvr >= 0 && index + pvr < targets.length;
        if (!isInRange) {
          console.log('Strike missed!');
          line = input.shift();
          continue;
        }
        strike(index, pvr, targets);
        break;
    }
    line = input.shift();
  }

  console.log(targets.join('|'));

  function shoot(index, pvr, targets) {
    let target = targets[index];
    if (target - pvr <= 0) {
      targets.splice(index, 1);
    } else {
      targets[index] -= pvr;
    }
  }

  function add(index, pvr, targets) {
    targets.splice(index, 0, pvr);
  }

  function strike(index, pvr, targets) {
    const startIndex = index - pvr;
    const removeCount = 2 * pvr + 1;
    targets.splice(startIndex, removeCount);
  }
}

movingTargets([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End',
]);
console.log('------------------');
movingTargets(['1 2 3 4 5', 'Strike 0 1', 'End']);
