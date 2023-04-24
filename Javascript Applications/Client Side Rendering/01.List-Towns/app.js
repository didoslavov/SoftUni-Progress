import { html, render } from './node_modules/lit-html/lit-html.js';

const input = document.getElementById('towns');
const root = document.getElementById('root');

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const towns = input.value.split(',').map(t => t.trim());

  const res = listTemplate(towns);
  render(res, root);
});

function listTemplate(towns) {
  const template = html` <ul>
    ${towns.map(t => html`<li>${t}</li>`)}
  </ul>`;

  return template;
}
