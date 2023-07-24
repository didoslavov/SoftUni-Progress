import { editBook, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (book, onSubmit) => html`<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="A Court of Thorns and Roses" .value=${book.title} />
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" .value=${book.description}></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="/images/book1.png" .value=${book.imageUrl} />
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="Fiction" .value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save" />
        </fieldset>
    </form>
</section>`;

export async function showEdit(ctx) {
    const bookId = ctx.params.id;
    const book = await getById(bookId);

    ctx.render(editTemplate(book, createSubmitHandler(onSubmit)));

    async function onSubmit({ title, description, imageUrl, type }) {
        if ([title, description, imageUrl, type].some((x) => x == '')) {
            return alert('All fields are required!');
        }

        await editBook(bookId, { title, description, imageUrl, type });
        ctx.page.redirect('/details/' + bookId);
    }
}
