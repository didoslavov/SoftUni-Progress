function storage(entries) {
  const storage = new Map();

  for (const entry of entries) {
    const currentEntrie = entry.split(' ');
    const product = currentEntrie[0];
    const quantity = Number(currentEntrie[1]);

    if (!storage.has(product)) {
      storage.set(product, quantity);
    } else {
      const newQuantity = storage.get(product) + quantity;
      storage.set(product, newQuantity);
    }
  }

  for (const [product, quantity] of storage) {
    console.log(`${product} -> ${quantity}`);
  }
}

storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);
