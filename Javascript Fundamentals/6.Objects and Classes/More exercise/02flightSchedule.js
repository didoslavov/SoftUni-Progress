function fligthSchedule(input) {
  const flightList = input.shift();
  const changedStatuses = input.shift();
  const status = input.shift().join(' ');
  const flights = {};

  for (const flight of flightList) {
    const [flightNumber, ...rest] = flight.split(' ');
    const destination = rest.join(' ');
    flights[destination] = flightNumber;
  }

  for (const changeStatus of changedStatuses) {
    const [flightNumber, changedStatus] = changeStatus.split(' ');

    for (key in flights) {
      if (flightNumber === flights[key]) {
        flights[key] = changedStatus;
        break;
      }
    }
  }

  if (status === 'Cancelled') {
    for (const destination in flights) {
      if (flights[destination] === 'Cancelled') {
        console.log(
          `{ Destination: '${destination}', Status: '${flights[destination]}' }`
        );
      }
    }
  } else {
    for (const destination in flights) {
      if (flights[destination] !== 'Cancelled') {
        flights[destination] = 'Ready to fly';
        console.log(
          `{ Destination: '${destination}', Status: '${flights[destination]}' }`
        );
      }
    }
  }
}

fligthSchedule([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  [
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled',
  ],
  ['Cancelled'],
]);
console.log('-------------------');
fligthSchedule([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  [
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled',
  ],
  ['Ready to fly'],
]);
