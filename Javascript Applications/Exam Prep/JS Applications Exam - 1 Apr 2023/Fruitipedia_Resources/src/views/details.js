import { deleteById, getById } from '../api/data.js';
import { html } from '../lib.js';

const detailsTemplate = (fruit, isOwner, onDelete) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${fruit.imageUrl} alt="example1" />
        <p id="details-title">${fruit.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${fruit.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${fruit.nutrition}</p>
            </div>
            ${isOwner
                ? html`<div id="action-buttons">
                      <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
                      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                  </div>`
                : null}
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const fruit = await getById(id);
    const isOwner = ctx.user._id == fruit._ownerId;

    ctx.render(detailsTemplate(fruit, isOwner, onDelete));

    async function onDelete() {
        const choise = confirm('Are you sure?');

        if (choise) {
            await deleteById(id);

            ctx.page.redirect('/');
        }
    }
}
