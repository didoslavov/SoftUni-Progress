function attachEvents() {
  document.getElementById('btnLoadPosts').addEventListener('click', load);
  document.getElementById('btnViewPost').addEventListener('click', view);
}

attachEvents();

let posts;

async function load() {
  const select = document.getElementById('posts');
  select.innerHTML = '';

  const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
  const data = await response.json();

  posts = Object.values(data);

  posts.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = p.title;

    select.appendChild(option);
  });
}

async function view(e) {
  const ulElement = document.getElementById('post-comments');
  const option = document.getElementById('posts');

  ulElement.innerHTML = '';

  const id = option.value;
  const heading = Array.from(option.children).find(
    x => x.value === id
  ).textContent;

  const response = await fetch(
    `http://localhost:3030/jsonstore/blog/comments/`
  );
  const data = await response.json();

  document.getElementById('post-title').textContent = heading;
  document.getElementById('post-body').textContent = posts.find(
    p => p.id === id
  ).body;

  Object.values(data)
    .filter(x => x.postId === id)
    .forEach(c => {
      const li = document.createElement('li');
      li.textContent = c.text;

      ulElement.appendChild(li);
    });
}
