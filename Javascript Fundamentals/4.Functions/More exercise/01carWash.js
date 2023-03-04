function carWash(commands) {
  let finalResult = 0;

  const soap = () => {
    let percentageCleaned = 0;
    return percentageCleaned + 10;
  };
  const water = () => {
    return finalResult * 1.2;
  };
  const vacuum = () => {
    return finalResult * 1.25;
  };
  const mud = () => {
    return finalResult * 0.9;
  };

  for (const command of commands) {
    switch (command) {
      case 'soap':
        finalResult += soap();
        break;
      case 'water':
        finalResult = water();
        break;
      case 'vacuum cleaner':
        finalResult = vacuum();
        break;
      case 'mud':
        finalResult = mud();
        break;
    }
  }
  console.log(`The car is ${finalResult.toFixed(2)}% clean.`);
}

carWash(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner']);
