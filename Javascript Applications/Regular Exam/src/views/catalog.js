import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (facts) => html`<h2>Fun Facts</h2>
    ${facts.length > 0 ? html`<section id="dashboard">${facts.map(factTemplate)}</section>` : html`<h2>No Fun Facts yet.</h2>`} `;

const factTemplate = (fact) => html`<div class="fact">
    <img src=${fact.imageUrl} alt="example2" />
    <h3 class="category">${fact.category}</h3>
    <p class="description">${fact.description}</p>
    <a class="details-btn" href="/details/${fact._id}">More Info</a>
</div>`;

export async function showCatalog(ctx) {
    const facts = await getAll();

    ctx.render(catalogTemplate(facts));
}
