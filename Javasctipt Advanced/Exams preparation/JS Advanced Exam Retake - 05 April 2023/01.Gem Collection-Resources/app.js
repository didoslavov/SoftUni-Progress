window.addEventListener('load', solve);

function solve() {
  const addBtn = document.getElementById('add-btn');
  const gemNameInput = document.getElementById('gem-name');
  const colorInput = document.getElementById('color');
  const caratsInput = document.getElementById('carats');
  const priceInput = document.getElementById('price');
  const typeInput = document.getElementById('type');
  const previewUl = document.getElementById('preview-list');
  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();

    const areEmptyFields =
      gemNameInput.value == '' ||
      colorInput.value == '' ||
      caratsInput.value == '' ||
      priceInput.value == '' ||
      typeInput.value == '';

    if (areEmptyFields) {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('gem-info');

    const articleElement = document.createElement('article');
    const h4Element = document.createElement('h4');
    h4Element.textContent = gemNameInput.value;
    articleElement.appendChild(h4Element);

    const colorElement = document.createElement('p');
    colorElement.textContent = 'Color: ' + colorInput.value;
    articleElement.appendChild(colorElement);

    const caratsElement = document.createElement('p');
    caratsElement.textContent = 'Carats: ' + caratsInput.value;
    articleElement.appendChild(caratsElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = 'Price: ' + priceInput.value + ' $';
    articleElement.appendChild(priceElement);

    const typeElement = document.createElement('p');
    typeElement.textContent = 'Type: ' + typeInput.value;
    articleElement.appendChild(typeElement);

    liElement.appendChild(articleElement);

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save to Collection';
    saveBtn.addEventListener('click', onSave);
    liElement.appendChild(saveBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Information';
    editBtn.addEventListener('click', onEdit);
    liElement.appendChild(editBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', onCancel);
    liElement.appendChild(cancelBtn);

    previewUl.appendChild(liElement);

    gemNameInput.value = '';
    colorInput.value = '';
    caratsInput.value = '';
    priceInput.value = '';
    typeInput.value = '';
    addBtn.disabled = true;

    function onEdit() {
      gemNameInput.value = h4Element.textContent;
      colorInput.value = extractContent(colorElement.textContent);
      caratsInput.value = extractContent(caratsElement.textContent);
      priceInput.value = extractContent(priceElement.textContent);
      typeInput.value = extractContent(typeElement.textContent);
      liElement.remove();
      addBtn.disabled = false;
    }

    function onSave() {
      const liElement = document.createElement('li');

      const pElement = document.createElement('p');
      pElement.classList.add('collection-item');
      pElement.textContent = `${h4Element.textContent} - Color: ${extractContent(
        colorElement.textContent
      )}/ Carats: ${extractContent(caratsElement.textContent)}/ Price: ${extractContent(
        priceElement.textContent
      )}$/ Type: ${extractContent(typeElement.textContent)}`;

      liElement.appendChild(pElement);

      document.getElementById('collection').appendChild(liElement);

      document.querySelector('.gem-info').remove();
      addBtn.disabled = false;
    }

    function onCancel() {
      liElement.remove();
      addBtn.disabled = false;
    }
  }

  function extractContent(content) {
    return content.split(' ')[1];
  }
}
