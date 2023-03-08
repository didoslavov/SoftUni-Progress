function subtract() {
    const num1Element = document.getElementById('firstNumber').value;
    const num2Element = document.getElementById('secondNumber').value;

    const subtract = num1Element - num2Element;
    
    document.getElementById('result').textContent = subtract;
}