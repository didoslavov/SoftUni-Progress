const body = document.querySelector('body');

async function loadDOMContent() {
    const loadBooksBtn = createElement('button', 'LOAD ALL BOOKS', {
        id: 'loadBooks',
        onclick: loadAllBooks,
    });

    const table = createElement('table', null, null, [
        createElement('thead', null, null, [
            createElement('tr', null, null, [
                createElement('th', 'Title'),
                createElement('th', 'Author'),
                createElement('th', 'Action'),
            ]),
        ]),
    ]);

    const addForm = createElement('form', null, { id: 'add-form' }, [
        createElement('h3', 'Add book'),
        createElement('label', 'TITLE'),
        createElement('input', null, { type: 'text', name: 'title', placeholder: 'Title...' }),
        createElement('label', 'AUTHOR'),
        createElement('input', null, { type: 'text', name: 'author', placeholder: 'Author...' }),
        createElement('input', null, { type: 'submit', value: 'Submit', onclick: onCreate }),
    ]);

    body.replaceChildren(loadBooksBtn, table, addForm);

    async function loadAllBooks() {
        const books = await getAllBooks();
        const bookRows = Object.entries(books).map(([id, b]) => {
            const el = createElement('tr', null, { id }, [
                createElement('td', b.title),
                createElement('td', b.author),
                createElement('td', null, null, [
                    createElement('button', 'Edit', { onclick: editBook }),
                    createElement('button', 'Delete'),
                ]),
            ]);

            return el;
        });

        table.append(createElement('tbody', null, null, [...bookRows]));
    }

    function editBook(e) {
        const id = e.target.parentElement.parentElement.id;
        const [titleInput, authorInput] = e.target.parentElement.parentElement.children;
        const author = authorInput.textContent;
        const title = titleInput.textContent;

        addForm.remove();
        const editForm = loadEditForm(author, title, id);
        body.appendChild(editForm);
    }
}

function loadEditForm(author, title, id) {
    const editForm = createElement('form', null, { id: 'edit-form' }, [
        createElement('input', null, { type: 'hidden', name: 'id' }),
        createElement('h3', 'Edit book'),
        createElement('label', 'TITLE'),
        createElement('input', null, { type: 'text', name: 'title', placeholder: 'Title...', value: title }),
        createElement('label', 'AUTHOR'),
        createElement('input', null, { type: 'text', name: 'author', placeholder: 'Author...', value: author }),
        createElement('input', null, { type: 'submit', value: 'Save', onclick: onEdit, id }),
    ]);

    return editForm;
}

async function onCreate(e) {
    e.preventDefault();
    const [titleInput, authorInput] = e.target.parentElement.querySelectorAll('[type="text"');

    try {
        if (authorInput.value == '' || titleInput.value == '') {
            throw new Error('Input cannot be empty');
        }

        const body = {
            title: titleInput.value,
            author: authorInput.value,
        };

        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function onEdit(e) {
    e.preventDefault();
    const id = e.target.id;
    const [titleInput, authorInput] = e.target.parentElement.querySelectorAll('[type="text"');
    const body = {
        title: titleInput.value,
        author: authorInput.value,
    };
    console.log({ authorInput, titleInput });
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        loadDOMContent();

        return data;
    } catch (error) {
        alert(error.message);
    }
}

async function getAllBooks() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books');

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        alert(error.message);
    }
}

function createElement(tagName, textContent, attributes, children = []) {
    const element = document.createElement(tagName);
    const PARAMS = {
        id: (value) => (element.id = value),
        class: (value) => element.classList.add(value),
        styles: (styles) => styles.forEach(([s, v]) => (element.style[s] = v)),
        onclick: (value) => element.addEventListener('click', value),
        type: (value) => element.setAttribute('type', value),
        name: (value) => element.setAttribute('name', value),
        value: (value) => element.setAttribute('value', value),
        placeholder: (value) => element.setAttribute('placeholder', value),
        alt: (value) => element.setAttribute('alt', value),
        width: (value) => element.setAttribute('width', value),
        height: (value) => element.setAttribute('height', value),
        colspan: (value) => element.setAttribute('colspan', value),
        disabled: () => element.setAttribute('disabled', ''),
        src: (value) => element.setAttribute('src', value),
    };

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
    }

    if (children.length == 0) {
        return element;
    }

    children.forEach((c) => element.appendChild(c));

    return element;
}

loadDOMContent();
