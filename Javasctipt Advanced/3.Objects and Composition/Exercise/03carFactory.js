function carFactory(input) {
  const car = {};
  const template = {
    'Small engine': { power: 90, volume: 1800 },
    'Normal engine': { power: 120, volume: 2400 },
    'Monster engine': { power: 200, volume: 3500 },
    carriage: { type: input.carriage, color: input.color },
    wheelsize: [0, 0, 0, 0],
  };

  addModel(car, input);

  addEngine(car, template, input);

  addCarriage(car, template);

  addWheelSize(car, template, input);

  return car;

  function addModel(obj, data) {
    obj.model = data.model;

    return obj;
  }

  function addEngine(obj, temp, data) {
    if (data.power <= 90) {
      obj.engine = temp['Small engine'];
    } else if (data.power <= 120) {
      obj.engine = temp['Normal engine'];
    } else if (data.power <= 200) {
      obj.engine = temp['Monster engine'];
    }

    return obj;
  }

  function addCarriage(obj, temp) {
    obj.carriage = temp['carriage'];

    return obj;
  }

  function addWheelSize(obj, temp, data) {
    let wheelSize = data['wheelsize'];

    if (wheelSize % 2 === 0) {
      wheelSize--;
    }

    temp['wheelsize'].fill(wheelSize);
    obj['wheels'] = temp['wheelsize'];

    return obj;
  }
}

console.log(
  carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
  })
);
console.log('-----------');
console.log(
  carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17,
  })
);
