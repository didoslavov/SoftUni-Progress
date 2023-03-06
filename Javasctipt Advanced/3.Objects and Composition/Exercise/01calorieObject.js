function calorieObject(input) {
    let product;
    const calories = input.reduce((acc,el, i) =>{

        if (i % 2 === 0) {
            product = el;
            acc[el] = '';
        } else {
        acc[product] = Number(el);
        }

        return acc;
    } , {});
    
   console.log(calories);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log('---------------');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])