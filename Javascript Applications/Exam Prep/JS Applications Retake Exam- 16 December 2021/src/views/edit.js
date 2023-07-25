import { editTheater, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (theater, onSubmit) => html`<section id="editPage">
    <form @submit=${onSubmit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${theater.title} />
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${theater.date} />
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${theater.author} />
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" placeholder="Description" .value=${theater.description}></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${theater.imageUrl} />
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const theater = await getById(id);

    ctx.render(editTemplate(theater, createSubmitHandler(onSubmit)));

    async function onSubmit({ title, date, author, description, imageUrl }) {
        if ([title, date, author, description, imageUrl].some((x) => x == '')) {
            return alert('All fields are required!');
        }

        await editTheater(id, { title, date, author, description, imageUrl });
        ctx.page.redirect('/profile');
    }
}
