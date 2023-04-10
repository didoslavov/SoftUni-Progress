function attachEvents() {
  document.getElementById('loadBooks').addEventListener('click', render);
  document.querySelector('form button').addEventListener('click', onSubmit);
}

attachEvents();
render();

async function request(url, id, options) {
  if (options && options.body != undefined) {
    Object.assign(options, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  
  const response = await fetch(url + id, options);
  const data = await response.json();

  return data;
}

async function render() {
  const data = await request(
    'http://localhost:3030/jsonstore/collections/books/', ''
  );

  const tbody = document.querySelector('tbody');

  const fragment = document.createDocumentFragment();

  Object.entries(data).forEach(book => {
    const tr = createElement('tr', '', book[0]);
    tr.appendChild(createElement('td', book[1].title));
    tr.appendChild(createElement('td', book[1].author));

    const td = createElement('td');
    td.appendChild(createElement('button', 'Edit'));
    td.appendChild(createElement('button', 'Delete'));
    tr.appendChild(td);

    fragment.appendChild(tr);
  });

  tbody.replaceChildren(fragment);
}

function onSubmit(e) {
  e.preventDefault();

  if (e.target.textContent == 'Submit') {
    createBook();
  }
}

function createBook() {
  const author = document.querySelector('[name="author"]');
  const title = document.querySelector('[name="title"]');
  const body = { author: author.value, title: title.value };

  if (body.author && body.title) {
    request('http://localhost:3030/jsonstore/collections/books/', '', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    author.value = '';
    title.value = '';

    render();
  }
}

async function deleteBook(id) {
  await request('http://localhost:3030/jsonstore/collections/books/', id, {
    method: 'DELETE',
  });
}

let id;

function onEdit(e) {
  id = e.target.parentElement.parentElement.id;
  const title = document.getElementById(id).children[0].textContent;
  const author = document.getElementById(id).children[1].textContent;
  const button = document.querySelector('form button');
  document.querySelector('form h3').textContent = 'Edit FORM';
  document.querySelector('[name="title"]').value = title;
  document.querySelector('[name="author"]').value = author;
  button.textContent = 'Save';
  button.removeAttribute('click', onSubmit);
  button.addEventListener('click', saveBook);

  document.getElementById(id).remove();
}

async function saveBook() {
  const button = document.querySelector('form button');
  const author = document.querySelector('[name="author"]');
  const title = document.querySelector('[name="title"]');
  const body = { author: author.value, title: title.value };

  await request(
    'http://localhost:3030/jsonstore/collections/books/',
    id,
    {
      method: 'PUT',
      body: JSON.stringify(body),
    }
  );

  button.removeAttribute('click', saveBook);
  button.addEventListener('click', onSubmit);
  button.textContent = 'Submit';
  document.querySelector('form h3').textContent = 'FORM';
  author.value = '';
  title.value = '';
  render();
}

function onDelete(e) {
  const id = e.target.parentElement.parentElement.id;
  deleteBook(id);
  render();
}

function createElement(type, content, id) {
  const element = document.createElement(type);

  if (type == 'button') {
    const ev = content == 'Edit' ? onEdit : onDelete;
    element.addEventListener('click', ev);
  }

  if (content) {
    element.textContent = content;
  }

  if (id != undefined) {
    element.id = id;
  }

  return element;
}
