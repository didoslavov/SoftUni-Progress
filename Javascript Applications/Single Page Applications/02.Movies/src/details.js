import { showEdit } from './edit.js';
import { creeateElement, showView } from './helpers.js';
import { showHome } from './home.js';

const section = document.getElementById('movie-example');
section.remove();

export function showDetails(id) {
  getMovie(id);
  showView(section);
}

async function getMovie(id) {
  const requests = [
    fetch('http://localhost:3030/data/movies/' + id),
    fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    ),
  ];

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  if (userData != null) {
    requests.push(
      fetch(
        `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`
      )
    );
  }
  const [moviesResponse, likesResponse, hasLikedResponse] = await Promise.all(
    requests
  );
  const [movieData, likes, hasLiked] = await Promise.all([
    moviesResponse.json(),
    likesResponse.json(),
    hasLikedResponse && hasLikedResponse.json(),
  ]);

  section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {
  const controls = creeateElement(
    'div',
    { className: 'col-md-4 text-center' },
    creeateElement('h3', { className: 'my-3' }, 'Movie Description'),
    creeateElement('p', {}, movie.description)
  );

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  if (userData != null) {
    if (userData.id == movie._ownerId) {
      controls.appendChild(
        creeateElement(
          'a',
          { className: 'btn btn-danger', href: '#', onClick: onDelete },
          'Delete'
        )
      );
      controls.appendChild(
        creeateElement(
          'a',
          {
            className: 'btn btn-warning',
            href: '#',
            onClick: () => showEdit(movie),
          },
          'Edit'
        )
      );
    } else {
      if (hasLiked.length > 0) {
        controls.appendChild(
          creeateElement(
            'a',
            { className: 'btn btn-primary', href: '#', onClick: onUnlike },
            'Unlike'
          )
        );
      } else {
        controls.appendChild(
          creeateElement(
            'a',
            { className: 'btn btn-primary', href: '#', onClick: onLike },
            'Like'
          )
        );
      }
    }
  }
  controls.appendChild(
    creeateElement('span', { className: 'enrolled-span' }, `Liked ${likes}`)
  );

  const element = creeateElement(
    'div',
    { className: 'container' },
    creeateElement(
      'div',
      { className: 'row bg-light text-dark' },
      creeateElement('h1', {}, `Movie title: ${movie.title}`),
      creeateElement(
        'div',
        { className: 'col-md-8' },
        creeateElement('img', {
          className: 'img-thumbnail',
          src: movie.img,
          alt: 'Movie',
        })
      ),
      controls
    )
  );

  return element;

  async function onDelete() {
    await fetch('http://localhost:3030/data/movies/' + movie._id, {
      method: 'delete',
      headers: {
        'X-Authorization': userData.token,
      },
    });
    showHome();
  }

  async function onLike() {
    await fetch('http://localhost:3030/data/likes/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.token,
      },
      body: JSON.stringify({ movieId: movie._id }),
    });

    showDetails(movie._id);
  }
  async function onUnlike() {
    const id = hasLiked[0]._id;
    await fetch('http://localhost:3030/data/likes/' + id, {
      method: 'delete',
      headers: {
        'X-Authorization': userData.token,
      },
    });

    showDetails(movie._id);
  }
}
