function sumTable() {
    const priceElements = Array.from(document.querySelectorAll('tr td:nth-of-type(2n)'));
    const sumElement = priceElements.pop();
    
    const totalPrice = priceElements.map(x => Number(x.textContent)).reduce((acc, num) => acc + num, 0);
    
    sumElement.textContent = totalPrice;
}