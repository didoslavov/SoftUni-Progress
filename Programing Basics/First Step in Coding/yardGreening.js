function greens(input) {
    let sqrmtprice = input[0] * 7.61;
    let discount = sqrmtprice * 0.18;
    let finalPrice = sqrmtprice - discount;
    console.log(`The final price is: ${finalPrice} lv.
    The discount is: ${discount} lv.`)
}
greens([100])