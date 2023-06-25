import { createComment, createDetails } from './util.js';

const section = document.getElementById('detailsView');
const h2 = document.getElementById('details-title');
const details = document.querySelector('.comment');
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
        fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + postId),
        fetch('http://localhost:3030/jsonstore/collections/myboard/comments/'),
    ]);

    const [post, comments] = await Promise.all([response.json(), commentsResponse.json()]);

    commentList.replaceChildren(
        ...Object.values(comments)
            .filter((x) => x.postId == postId)
            .map(createComment)
    );

    form.id = postId;
    h2.textContent = post.title;

    details.replaceChildren(createDetails(post), commentList);

    document.getElementById('main').replaceChildren(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();
    const postId = form.id;

    try {
        if (username == '' || content == '') {
            throw new Error('Username is required!');
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, content, postId, date: new Date() }),
        });

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
