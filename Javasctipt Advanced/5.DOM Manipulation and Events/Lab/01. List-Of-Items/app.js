function addItem() {
    const newItemElement = document.getElementById('newItemText')
    const newItem = newItemElement.value;
    const listElement = document.getElementById('items');
    const newElement = document.createElement('li');

    newElement.textContent = newItem;
    listElement.appendChild(newElement);

    newItemElement.value = '';
}