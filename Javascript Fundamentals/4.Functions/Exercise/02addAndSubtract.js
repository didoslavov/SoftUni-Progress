function addAndSubtract(firstNum, secondNum, thirdNum) {

    let sum = function sum(a,b) {
        return a + b;
    }    
    let subtract = function subtract(sum, c) {
        return sum - c;
    }

    console.log(subtract(sum(firstNum, secondNum), thirdNum))
}

addAndSubtract(23,
    6,
    10)