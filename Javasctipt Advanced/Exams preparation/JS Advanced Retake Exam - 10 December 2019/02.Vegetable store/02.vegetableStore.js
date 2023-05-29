class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let uniqueVegies = [];

        vegetables.forEach((currentVegie) => {
            let [type, quantity, price] = currentVegie.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const vegie = this.availableProducts.find((v) => v.type == type);

            if (vegie) {
                vegie.quantity += quantity;

                if (price > vegie.price) {
                    vegie.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
                uniqueVegies.push(type);
            }
        });

        uniqueVegies = [...new Set(uniqueVegies)];

        return `Successfully added ${uniqueVegies.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach((currentVegie) => {
            let [type, quantity] = currentVegie.split(' ');
            quantity = Number(quantity);
            const vegie = this.availableProducts.find((v) => v.type == type);

            if (!vegie) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (vegie.quantity < quantity) {
                throw new Error(
                    `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
                        2
                    )}.`
                );
            }

            totalPrice += quantity * vegie.price;
            vegie.quantity -= quantity;
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const vegie = this.availableProducts.find((v) => v.type == type);

        if (!vegie) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (vegie.quantity < quantity) {
            vegie.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        vegie.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        const sortedVegies = this.availableProducts
            .sort((a, b) => a.price - b.price)
            .map((v) => `${v.type}-${v.quantity}-$${v.price}`);

        return `Available vegetables:\n${sortedVegies.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${
            this.location
        }.`;
    }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5']));
console.log(vegStore.rottingVegetable('Okra', 1));
console.log(vegStore.rottingVegetable('Okra', 2.5));
console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5']));
console.log(vegStore.revision());
