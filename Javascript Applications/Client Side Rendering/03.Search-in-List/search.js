import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const ulElement = document.querySelector('ul');

document.querySelector('button').addEventListener('click', onSearch);

render(towns.map(template), ulElement);

function onSearch() {
  const inputEl = document.getElementById('searchText');
  const input = inputEl.value;

  let matches = 0;

  document.querySelectorAll('li').forEach(t => {
    t.classList.remove('active');

    if (input == '') {
      return;
    }

    if (t.textContent.includes(input)) {
      t.classList.add('active');
      matches++;
    }
  });

  document.getElementById('result').textContent = `${matches} matches found`;
  inputEl.value = '';
}

function template(town) {
  return html` <li>${town}</li>`;
}
