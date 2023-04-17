import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { creeateElement, showView } from './helpers.js';

const section = document.getElementById('home-page');
const addMovieBtn = section.querySelector('#add-movie-button');
const before = section.querySelector('#movie');
const catalog = section.querySelector('#movies-list');
catalog.addEventListener('click', e => {
  e.preventDefault();
  let target = e.target;

  if (target.tagName == 'BUTTON') {
    target = target.parentElement;
  }
  if (target.tagName == 'A') {
    const id = target.dataset.id;
    showDetails(id);
  }
});
section.querySelector('#createLink').addEventListener('click', e => {
  e.preventDefault();
  showCreate();
});
section.remove();

export function showHome() {
  showView(section);
  getMovies();
}

export function hideCreateButton() {
  addMovieBtn.remove();
}
export function addCreateBtn() {
  section.insertBefore(addMovieBtn, before);
}

async function getMovies() {
  try {
    const response = await fetch('http://localhost:3030/data/movies');

    if (response.ok != true) {
      const err = await response.json();
      throw new Error(err.message);
    }
    const data = await response.json();

    catalog.replaceChildren(...data.map(createMovieCard));
  } catch (error) {
    alert(error.message);
  }
}

function createMovieCard(movie) {
  const element = creeateElement('div', { className: 'card mb-4' });
  element.innerHTML = `
  <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <a data-id="${movie._id} "href="#">
                <button type="button" class="btn btn-info">Details</button>
            </a>
        </div>
  `;
  return element;
}
