function factory(library, orders) {
  const products = [];

  for (const order of orders) {
    const { template, parts } = order;
    const { name } = template;
    const newProduct = {};

    for (const funcName of parts) {
      const func = library[funcName];

      if (newProduct.hasOwnProperty(name)) {
        newProduct[funcName] = func;
        continue;
      }

      newProduct.name = name;
      newProduct[funcName] = func;
    }
    products.push(newProduct);
  }
  return products;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print'],
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan'],
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print'],
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play'],
  },
];
const products = factory(library, orders);
console.log(products);
