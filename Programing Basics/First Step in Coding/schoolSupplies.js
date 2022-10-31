function schoolSupplies(input) {

    let packPens = Number(input[0]);
    let packMarkers = Number(input[1]);
    let litresCleaner = Number(input[2]);
    let discount = Number(input[3]);

    let pensFinalPrice = packPens * 5.80;
    let marksersFinalPrice = packMarkers * 7.20;
    let cleanerFinalPrice = litresCleaner * 1.20;

    let finalPrice = pensFinalPrice + marksersFinalPrice + cleanerFinalPrice;
    let priceAfterDiscount = finalPrice - (finalPrice * (discount / 100));

    console.log(priceAfterDiscount);

}

schoolSupplies(["2", "3", "4", "25"]);