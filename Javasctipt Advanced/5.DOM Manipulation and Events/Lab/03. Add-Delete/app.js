function addItem() {
  const newItemElement = document.getElementById('newItemText');
  const newItem = newItemElement.value;
  const listElement = document.getElementById('items');

  const newElement = document.createElement('li');
  const deleteBtn = document.createElement('a');

  deleteBtn.href = '#';
  deleteBtn.textContent = '[Delete]';
  deleteBtn.addEventListener('click', onClick);  
  newElement.textContent = newItem;

  listElement.appendChild(newElement);
  newElement.appendChild(deleteBtn)
  
  newItemElement.value = '';

  function onClick() {
    deleteBtn.parentElement.remove()
  }
}
