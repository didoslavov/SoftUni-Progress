function volewsSum(input) {

    let word = input[0];
    let letterSum = 0;

    for (let i = 0; i < word.length; i++) {
        switch (word.charAt(i)) {
            case "a":
                letterSum += 1;
                break;
            case "e":
                letterSum += 2;
                break;
            case "i":
                letterSum +=  3;
                break;
            case "o":
                letterSum += 4;
                break;
            case "u":
                letterSum += 5;
                break;
            default:
                break;
        }
    }
    console.log(letterSum);
}

volewsSum(["hi"]);