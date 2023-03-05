function catalogue(products) {
  const catalogue = [];

  products.forEach((product) => {
    const [name, price] = product.split(' : ');
    const currentProduct = {
      name,
      price,
    };
    catalogue.push(currentProduct);
  });

  const sortedCatalogue = catalogue.sort(
    (a, b) => a.name.localeCompare(b.name),
    []
  );
  let isRightLetter = true;
  let firstChar;

  for (const product of sortedCatalogue) {
    firstChar === product.name[0]
      ? (isRightLetter = false)
      : (isRightLetter = true);

    if (isRightLetter) {
      firstChar = product.name[0];
      console.log(firstChar);
    }

    console.log(`  ${product.name}: ${product.price}`);
  }
}

catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
