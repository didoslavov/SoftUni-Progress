function netherRealms(input) {
  const splitter = /\s*,\s*/gm;
  const names = input.split(splitter).sort((a, b) => a.localeCompare(b));

  for (const name of names) {
    const deamonHealth = getHealth(name);
    const deamonPower = getAttackPower(name);
    console.log(
      `${name} - ${deamonHealth} health, ${deamonPower.toFixed(2)} damage`
    );
  }

  function getHealth(name) {
    const regExp = /[^\d ,\+\-\*\/\.]/gm;
    const deamonName = name.match(regExp).join('');
    let healt = 0;

    for (const char of deamonName) {
      const currentCharCode = char.charCodeAt();
      healt += currentCharCode;
    }
    return healt;
  }

  function getAttackPower(name) {
    const regExp = /[-+]?\d+(\.\d+)?/gm;
    const isValid = regExp.test(name);
    let sum = 0;

    if (!isValid) {
      return 0;
    }

    const powerPoints = name.match(regExp);
    powerPoints.forEach((number) => {
      sum += Number(number);
    });

    const opeeratorsPattern = /[\*\/]/gm;
    const exeptions = opeeratorsPattern.test(name);

    if (!exeptions) {
      return sum;
    }

    const matchOperators = name.match(opeeratorsPattern);

    matchOperators.forEach((operator) => {
      switch (operator) {
        case '*':
          sum *= 2;
          break;
        case '/':
          sum /= 2;
          break;
      }
    });

    return sum;
  }
}

netherRealms('Gos/ho');
