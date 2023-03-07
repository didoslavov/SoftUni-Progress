function storeCatalogue(input) {
  const store = {};

  for (const productInfo of input) {
    let [product, price] = productInfo.split(' : ');
    price = Number(price);

    store[product] = price;
  }

  let group;

  Object.keys(store)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach((product) => {
      const printGroup = group === product[0] ? false : true;

      if (printGroup) {
        group = product[0];
        console.log(group);
      }
      console.log(`  ${product}: ${store[product]}`);
    });
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
console.log('---------------');
storeCatalogue([
  'Banana : 2',
  "Rubic's Cube : 5",
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10',
]);
