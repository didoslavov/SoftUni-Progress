function addItem() {
    const selectElement = document.getElementById('menu');

    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');

    const newOptionElement = document.createElement('option');

    newOptionElement.textContent = textElement.value;
    newOptionElement.value = valueElement.value;

    selectElement.appendChild(newOptionElement);

    textElement.value = '';
    valueElement.value = '';
}