class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const line of products) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = productQuantity;
                } else {
                    this.stockProducts[productName] += productQuantity;
                }

                this.budgetMoney -= productTotalPrice;

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        let result = this.history.slice(this.history.length - products.length);

        return result.join('\n');
    }

    addToMenu(mealName, neededProducts, price) {
        if (!this.menu[mealName]) {
            this.menu[mealName] = {
                products: [neededProducts],
                price: Number(price),
            };

            let length = Object.keys(this.menu).length;
            if (length == 1) {
                return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${mealName} we have ${length} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${mealName} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let allMealsInMenu = Object.keys(this.menu);
        if (allMealsInMenu.length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let result = [];

        allMealsInMenu.forEach((key) => result.push(`${key} - $ ${this.menu[key].price}`));

        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let { products, price } = this.menu[meal];
        for (let item of products[0]) {
            item = item.split(' ');
            let quantity = Number(item.pop());
            let product = item.join(' ');

            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let item of products[0]) {
            item = item.split(' ');
            let quantity = Number(item.pop());
            let product = item.join(' ');
            this.stockProducts[product] -= quantity;
        }
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
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
