function calc() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const resultElement = document.getElementById('sum');

    const num1 = Number(num1Element.value);
    const num2 = Number(num2Element.value);
    const sum = num1 + num2;
    resultElement.value = sum;
}
