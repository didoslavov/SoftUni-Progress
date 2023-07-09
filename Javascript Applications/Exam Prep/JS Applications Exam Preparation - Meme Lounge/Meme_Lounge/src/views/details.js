import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl} />
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner
                ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
                      <button @click=${onDelete} class="button danger">Delete</button>`
                : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const meme = await getById(id);
    const isOwner = ctx.user?._id == meme._ownerId;
    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
}
