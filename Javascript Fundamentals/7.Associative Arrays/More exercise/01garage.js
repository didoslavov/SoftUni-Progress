function garage(input) {
  const parking = {};

  for (const line of input) {
    let [garage, carInfo] = line.split(' - ');

    if (!parking.hasOwnProperty(garage)) {
      parking[garage] = [];
    }

    parking[garage].push(carInfo);
  }

  Object.entries(parking)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .forEach(([parkingLot, cars]) => {
      console.log(`Garage № ${parkingLot}`);

      for (let car of cars) {
        car = car.replace(/:/g, ' -');
        console.log(`--- ${car}`);
      }
    });
}

garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
console.log('-------------');
garage([
  '1 - color: green, fuel type: petrol',
  '1 - color: dark red, manufacture: WV',
  '2 - fuel type: diesel',
  '3 - color: dark blue, fuel type: petrol',
]);
