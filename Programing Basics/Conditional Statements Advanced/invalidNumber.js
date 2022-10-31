function invalidNumber(input) {

    let number = Number(input[0]);

    if ((100 <= number && number <= 200) || number == 0) {
    } else {
        console.log("invalid");
    }

}

invalidNumber(["-1"]);
