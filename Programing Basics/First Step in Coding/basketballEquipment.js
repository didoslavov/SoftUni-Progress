function basketballEquipment(input) {

    let yearTax = Number(input[0]);
    let shoes = yearTax - (yearTax * 0.40);
    let wears = shoes - (shoes * 0.20); 
    let ball = wears / 4;
    let accessories = ball / 5;
    let totalSum = yearTax + shoes + wears + ball + accessories;

    console.log(totalSum);

}

basketballEquipment(["365"]);