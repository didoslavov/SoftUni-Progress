function shopping(input) {

    let budget = Number(input[0]);
    let vgas = Number(input[1]);
    let cpus = Number(input[2]);
    let rams = Number(input[3]);

    let vgaPrice = 250;
    let cpuPrice = vgas * vgaPrice * 0.35;
    let ramPrice = vgas * vgaPrice * 0.10;
    
    let totalPrice = vgas * vgaPrice + cpus * cpuPrice + rams * ramPrice;

    if (vgas > cpus) {
        totalPrice = totalPrice - totalPrice * 0.15;
    }

    let money = Math.abs(totalPrice - budget);

    if (budget >= totalPrice) {
        console.log(`You have ${money.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`);
    }


}

shopping(["920.45",
"3",
"1",
"1"])