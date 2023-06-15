import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');
const ul = createElement('ul');

cats.forEach((c) => {
    const li = createElement('li', null, null, [
        createElement('img', null, {
            src: `./images/${c.imageLocation}.jpg`,
            width: '250',
            height: '250',
            alt: 'Card image cap',
        }),
        createElement('div', null, { class: 'info' }, [
            createElement('button', 'Show status code', { class: 'showBtn', onclick: onToggle }),
            createElement('div', null, { class: 'status', styles: [['display', 'none']], id: '100' }, [
                createElement('h4', `Status Code: ${c.statusCode}`),
                createElement('p', 'Continue'),
            ]),
        ]),
    ]);

    ul.append(li);
    root.append(ul);
});

function onToggle(e) {
    const button = e.target;

    if (button.value == 'ON') {
        button.value = 'OFF';
        button.textContent = 'Show status code';
        button.nextSibling.style.display = 'none';
    } else {
        button.value = 'ON';
        button.textContent = 'Hide status code';
        button.nextSibling.style.display = 'block';
    }
}

function createElement(tagName, textContent, attributes, children = []) {
    const element = document.createElement(tagName);
    const PARAMS = {
        alt: (value) => element.setAttribute('alt', value),
        styles: (styles) => styles.forEach(([s, v]) => (element.style[s] = v)),
        width: (value) => element.setAttribute('width', value),
        height: (value) => element.setAttribute('height', value),
        colspan: (value) => element.setAttribute('colspan', value),
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
        Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
    }

    if (children.length == 0) {
        return element;
    }

    children.forEach((c) => element.appendChild(c));

    return element;
}

function toggleInfo(cat) {
    cat.info = !cat.info;
}

//style="display: none"

// function onClick(e) {
//   const btn = e.target;
//   const isHidden = btn.parentElement.querySelector('.status').style.display == 'none';

//   if (isHidden) {
//     btn.parentElement.querySelector('.status').style.display = 'block';
//     btn.textContent = 'Hide status code';
//   } else {
//     btn.parentElement.querySelector('.status').style.display = 'none';
//     btn.textContent = 'Show status code';
//   }
// }
