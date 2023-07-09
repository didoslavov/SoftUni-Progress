import { getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (meme, isOwner) => html`<section id="meme-details">
    <h1>Meme Title: Bad code can present some problems</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl} />
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner
                ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a> <button class="button danger">Delete</button>`
                : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const meme = await getById(id);
    const isOwner = ctx.user._id == meme._ownerId;
    ctx.render(detailsTemplate(meme, isOwner));
}
