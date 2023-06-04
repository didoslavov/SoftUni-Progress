window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');

    const allHitsElement = document.querySelector('.all-hits-container');
    const savedSongsElement = document.querySelector('.saved-container');

    const likesElement = document.querySelector('.likes p');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();

        const genre = genreInput.value;
        const name = nameInput.value;
        const author = authorInput.value;
        const date = dateInput.value;

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        const songCard = createElement('div', null, { class: 'hits-info' }, [
            createElement('img', null, { src: './static/img/img.png' }),
            createElement('h2', `Genre: ${genre}`),
            createElement('h2', `Name: ${name}`),
            createElement('h2', `Author: ${author}`),
            createElement('h3', `Date: ${date}`),
            createElement('button', 'Save song', { class: 'save-btn', onclick: onSave }),
            createElement('button', 'Like song', { class: 'like-btn', onclick: onLike }),
            createElement('button', 'Delete', { class: 'delete-btn', onclick: onDelete }),
        ]);

        allHitsElement.appendChild(songCard);

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
    }

    function onDelete(e) {
        e.target.parentElement.remove();
    }

    function onSave(e) {
        const songCard = e.target.parentElement;
        songCard.removeChild(e.target.nextSibling);
        songCard.removeChild(e.target);

        savedSongsElement.appendChild(songCard);
    }

    function onLike(e) {
        const likes = Number(likesElement.textContent.split(':')[1]);

        likesElement.textContent = 'Total Likes: ' + (likes + 1);
        e.target.disabled = true;
    }

    function createElement(tagName, textContent, attributes, children = []) {
        const element = document.createElement(tagName);
        const ATTRIBUTES = {
            class: (value) => element.classList.add(value),
            id: (value) => (element.id = value),
            onclick: (value) => element.addEventListener('click', value),
            disabled: () => element.setAttribute('disabled', ''),
            src: (value) => element.setAttribute('src', value),
        };

        if (textContent) {
            element.textContent = textContent;
        }

        if (attributes) {
            Object.entries(attributes).forEach(([attribute, value]) => ATTRIBUTES[attribute](value));
        }

        if (children.length == 0) {
            return element;
        }

        children.forEach((c) => element.appendChild(c));

        return element;
    }
}
