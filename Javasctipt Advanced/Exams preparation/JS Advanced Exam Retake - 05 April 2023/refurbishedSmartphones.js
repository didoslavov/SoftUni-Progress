class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (model === '' || storage < 0 || price < 0 || condition === '') {
      throw new Error('Invalid smartphone!');
    }

    this.availableSmartphones.push({ model, storage, price, condition });

    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
  }

  sellSmartphone(model, desiredStorage) {
    let soldPrice = 0;
    const phone = this.availableSmartphones.find((s) => s.model == model);

    if (!phone) {
      throw new Error(`${model} was not found!`);
    }

    if (phone.storage >= desiredStorage) {
      soldPrice = phone.price;
    } else if (Math.abs(phone.storage - desiredStorage) <= 128) {
      soldPrice = phone.price * 0.9;
    } else {
      soldPrice = phone.price * 0.8;
    }

    this.soldSmartphones.push({
      model: phone.model,
      storage: phone.storage,
      soldPrice,
    });

    this.availableSmartphones.filter((s) => s.model != model);
    this.revenue += soldPrice;
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error('There are no available smartphones!');
    }

    const res = this.availableSmartphones.map(
      (s) => `${s.model} / ${s.storage * 2} GB / ${s.condition} condition / ${s.price.toFixed(2)}$`
    );
    return `Upgraded Smartphones:\n${res.join('\n')}`;
  }

  salesJournal(criteria) {
    if (criteria !== 'storage' && criteria !== 'model') {
      throw new Error('Invalid criteria!');
    }

    let res = null;

    if (criteria === 'storage') {
      res = this.soldSmartphones.sort((a, b) => b.storage - a.storage);
    } else {
      res = this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
    }

    res = res.map((s) => `${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$`);

    return `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${res.length} smartphones sold:\n${res.join(
      '\n'
    )}`;
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
