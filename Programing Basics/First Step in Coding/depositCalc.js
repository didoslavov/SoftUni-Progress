function depositCalculator(input){
    
    let depositAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let depositInterest = Number(input[2]);

    let interest = depositAmount * (depositInterest / 100);
    let monthInterest = interest / 12;
    let totalSum = depositAmount + depositTime * monthInterest;

    console.log(totalSum);
}

depositCalculator(['2', '5', 9]);