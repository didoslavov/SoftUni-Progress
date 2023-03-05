function piccolo(input) {
  const carInfo = input.slice(' ');
  const carList = {};

  for (let i = 0; i < input.length; i++) {
    const currentCar = carInfo[i].split(', ');
    const command = currentCar[0];
    const carNumber = currentCar[1];

    if (command === 'IN') {
      carList[carNumber] = `${i}`;
    } else {
      delete carList[carNumber];
    }
  }

  const sortedCars = Object.keys(carList).sort((a, b) => a.localeCompare(b));
  let isEmpty = sortedCars.length < 1;

  if (isEmpty) {
    console.log('Parking Lot is Empty');
  } else {
    console.log(sortedCars.join('\n'));
  }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
