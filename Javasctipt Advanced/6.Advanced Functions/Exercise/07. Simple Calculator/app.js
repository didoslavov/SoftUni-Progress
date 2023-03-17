function calculator() {
    let selector1;
    let selector2;
    let result;

    const calculate = {
        init(num1, num2, res) {
            selector1 = document.querySelector(num1);
            selector2 = document.querySelector(num2);
            result = document.querySelector(res);
        },
        add() {
            result.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract() {
            result.value = Number(selector1.value) - Number(selector2.value);
        }
    }
    return calculate;
}

const calculate = calculator();
calculate.init ('#num1', '#num2', '#result');





