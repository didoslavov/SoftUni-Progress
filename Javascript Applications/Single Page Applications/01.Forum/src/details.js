const section = document.getElementById('detailsView');
const postElement = {
  title: document.getElementById('details-title'),
  username: document.getElementById('details-username'),
  time: document.getElementById('details-time'),
  content: document.getElementById('details-content'),
};
const commentList = document.getElementById('user-comment');

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

section.remove();

export function showDetails(e) {
  let target = e.target;
  if (target.tagName == 'H2') {
    target = target.parentElement;
  }

  if (target.tagName == 'A') {
    e.preventDefault();

    const postId = target.id;
    showPost(postId);
  }
}

async function showPost(postId) {
  const [response, commentsResponse] = await Promise.all([
    fetch(
      'http://localhost:3030/jsonstore/collections/myboard/posts/' + postId
    ),
    fetch('http://localhost:3030/jsonstore/collections/myboard/comments/'),
  ]);

  const [post, comments] = await Promise.all([
    response.json(),
    commentsResponse.json(),
  ]);

  commentList.replaceChildren(
    ...Object.values(comments)
      .filter(x => x.postId == postId)
      .map(createComment)
  );

  form.id = postId;

  postElement.title.textContent = post.title;
  postElement.username.textContent = post.username;
  postElement.time.textContent = post.date;
  postElement.content.textContent = post.content;

  document.getElementById('main').replaceChildren(section);
}

function createComment(comment) {
  const element = document.createElement('div');
  element.className = 'topic-name-wrapper';
  element.innerHTML = `
    <div class="topic-name">
            <p>
            <strong>${comment.username}</strong> commented on
            <time>${comment.date}</time>
            </p>
            <div class="post-content">
            <p>${comment.content}</p>
            </div>
        </div>
    `;
  return element;
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const username = formData.get('username').trim();
  const content = formData.get('postText').trim();
  const postId = form.id;

  try {
    if (username == '' || content == '') {
      throw new Error('Username is required !');
    }

    const response = await fetch(
      'http://localhost:3030/jsonstore/collections/myboard/comments/',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, content, postId, date: new Date() }),
      }
    );

    if (response.ok != true) {
      const err = await response.json();
      throw new Error(err.message);
    }
    form.reset();
    showPost(postId);
  } catch (error) {
    alert(error.message);
  }
}
