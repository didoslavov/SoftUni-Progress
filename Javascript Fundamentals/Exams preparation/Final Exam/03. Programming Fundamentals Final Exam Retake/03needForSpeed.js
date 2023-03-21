function needForSpeed(input) {
  const initNumber = Number(input.shift());
  const cars = {};

  input.splice(0, initNumber).forEach((c) => {
    const [car, mileage, fuel] = c.split('|');
    cars[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  });

  let line = input.shift();

  while (line !== 'Stop') {
    const [command, ...params] = line.split(' : ');
    switch (command) {
      case 'Drive':
        const [car, distance, fuel] = params;
        if (cars[car].fuel < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            cars[car].mileage += Number(distance);
            cars[car].fuel -= Number(fuel);
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (cars[car].mileage > 99999) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        }
        break;
      case 'Refuel':
        const [carToRefuel, newFuel] = params;
        if (cars[carToRefuel].fuel + Number(newFuel) > 75) {
            const totalFuelRefueled = 75 - cars[carToRefuel].fuel;
            cars[carToRefuel].fuel = 75;
            console.log(`${carToRefuel} refueled with ${totalFuelRefueled} liters`);
        } else {
            cars[carToRefuel].fuel += Number(newFuel);
            console.log(`${carToRefuel} refueled with ${Number(newFuel)} liters`)
        }
        break;
      case 'Revert':
        const [carToRevert, mileage] = params;
        if (cars[carToRevert].mileage - mileage >= 10000) {
            cars[carToRevert].mileage -= Number(mileage);
            console.log(`${carToRevert} mileage decreased by ${Number(mileage)} kilometers`);
        } else {
            cars[carToRevert].mileage = 10000;
        }
        break;
    }

    line = input.shift();
  }

  for (const car in cars) {
    console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
  }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
