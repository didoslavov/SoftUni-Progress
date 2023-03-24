function carRegister(input) {
  const brands = {};

  for (const line of input) {
    const [brand, model, qty] = line.split(' | ');

    if (!brands.hasOwnProperty(brand)) {
      brands[brand] = {
        [model]: 0,
      };
    } else {
        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model] = 0;
        }
    }

    brands[brand][model] += Number(qty);
  }
  
  for (const brand in brands) {
        console.log(brand);
        for (const model in brands[brand]) {
            console.log(`###${model} -> ${brands[brand][model]}`);
        }
  }
}

carRegister([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
