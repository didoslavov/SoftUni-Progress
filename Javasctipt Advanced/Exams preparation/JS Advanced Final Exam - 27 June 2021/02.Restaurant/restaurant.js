class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach((p) => {
            const [productName, productQuantity, productTotalPrice] = p.split(' ');

            if (Number(productTotalPrice <= this.budgetMoney)) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += Number(productQuantity);
                } else {
                    this.stockProducts[productName] = Number(productQuantity);
                }

                this.budgetMoney -= Number(productTotalPrice);
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.history.slice(this.history.length - products.length).join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        this.menu[meal] = {
            products: [...neededProducts],
            price: Number(price),
        };

        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        return Object.keys(this.menu).length === 0
            ? 'Our menu is not ready yet, please come later...'
            : Object.keys(this.menu)
                  .map((product) => `${product} - $ ${this.menu[product].price}`)
                  .join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const currentMeal = this.menu[meal];
        currentMeal.products.forEach((p) => {
            const [productName, productQuantity] = p.split(' ');

            if (!this.stockProducts[productName] || this.stockProducts[productName] < Number(productQuantity)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            this.stockProducts[productName] -= Number(productQuantity);
        });

        this.budgetMoney += currentMeal.price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(
    kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50'])
);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(
    kitchen.addToMenu(
        'Pizza',
        ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'],
        15.55
    )
);
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
