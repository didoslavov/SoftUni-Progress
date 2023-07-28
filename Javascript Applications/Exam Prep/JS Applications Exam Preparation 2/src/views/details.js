import { deleteItem, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTempalte = (car, isOwner, onDelete) => html`<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl} />
        <hr />
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        ${isOwner
            ? html`<div class="listings-buttons">
                  <a href="/edit/${car._id}" class="button-list">Edit</a>
                  <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
              </div>`
            : nothing}
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const car = await getById(id);
    const isOwner = ctx.user?._id == car._ownerId;

    ctx.render(detailsTempalte(car, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are u sure?');

        if (choice) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }
}
