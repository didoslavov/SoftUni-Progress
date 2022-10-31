function numberInRange(input) {

    let number = Number(input[0]);

    if (-100 <= number && number <= 100 && number != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

numberInRange(["25"]);