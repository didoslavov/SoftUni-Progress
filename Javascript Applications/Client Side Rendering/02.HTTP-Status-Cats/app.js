import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('allCats');
cats.forEach(c => (c.info = false));

update();

function update() {
  render(
    html`<ul>
      ${cats.map(listTemplate)}
    </ul>`,
    root
  );
}

function listTemplate(cat) {
  const template = html` <li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap" />
    <div class="info">
      <button @click=${() => toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
      ${cat.info
        ? html`<div class="status" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
          </div>`
        : null}
    </div>
  </li>`;

  return template;
}

function toggleInfo(cat) {
  cat.info = !cat.info;
  update();
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
