import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (fruits) => html`
    <h2>Fruits</h2>
    <section id="dashboard">${fruits.length == 0 ? html`<h2>No fruit info yet.</h2>` : fruits.map(fruitCardTemplate)}</section>
`;

const fruitCardTemplate = (fruit) => html`<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`;

export async function catalogView(ctx) {
    const fruits = await getAll();
    ctx.render(catalogTemplate(fruits));
}
