import { showDetails } from './details.js';
import { createPostPreview } from './util.js';

const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails);
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.querySelector('[name="cancel"]').addEventListener('click', clearForm);
const container = section.querySelector('.topic-container');

section.remove();

function clearForm() {
    form.reset();
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();

    try {
        if (title == '' || username == '' || content == '') {
            throw new Error('All fields are required !');
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, username, content, date: new Date() }),
        });

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        clearForm();
        showHome();
    } catch (error) {
        alert(error.message);
    }
}

export async function showHome(e) {
    e?.preventDefault();

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const posts = await response.json();

    document.getElementById('main').replaceChildren(section);
    container.replaceChildren(...Object.values(posts).map(createPostPreview));
}
