import { showDetails } from './details.js';
import { showView } from './helpers.js';

const section = document.getElementById('edit-movie');
const form = section.querySelector('form');
form.querySelector('button').addEventListener('click', onEdit);
section.remove();

let id;

export function showEdit(movieData) {
  showView(section);
  populateForm(movieData);
}

function populateForm(movieData) {
  id = movieData._id;
  const title = form.querySelector('#title');
  const description = form.querySelector('[name="description"]');
  const img = form.querySelector('#imageUrl');

  title.value = movieData.title;
  description.value = movieData.description;
  img.value = movieData.img;
}

async function onEdit(e) {
  e.preventDefault();

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const formData = new FormData(form);
  const { title, description, img } = Object.fromEntries(formData);

  try {
    if (title == '' || description == '' || img == '') {
      throw new Error('All fields are required !');
    }

    const response = await fetch('http://localhost:3030/data/movies/' + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.token,
      },
      body: JSON.stringify({ title, description, img }),
    });

    if (response.ok != true) {
      const err = await response.json();
      throw new Error(err.message);
    }

    showDetails(id);
  } catch (error) {
    alert(error.message);
  }
}
