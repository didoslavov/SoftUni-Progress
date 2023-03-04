function fishTank(input) { 
    
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volumeTank = lenght * widht * height;
    let volumeInLitres = volumeTank * 0.001;
    let filledSpace = volumeInLitres * percentage / 100;
    let totalWater = volumeInLitres - filledSpace;


    console.log(totalWater);

}

fishTank(["85", "75", "47", "17"]);