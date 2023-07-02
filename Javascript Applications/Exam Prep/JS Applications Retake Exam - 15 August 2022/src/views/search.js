import { searchShoes } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';

const searchTemplate = (ownerId, shoes = [], onSearch) => html`<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${shoes.length == 0
            ? html` <h2>There are no results found.</h2>`
            : html`<ul class="card-wrapper">
                  ${shoes.map((s) => shoeCardTemplate(ownerId, s))}
              </ul>`}
    </div>
</section>`;

const shoeCardTemplate = (ownerId, shoe) => html`<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${shoe._ownerId == ownerId ? html`<a class="details-btn" href="/catalog/${shoe._id}">Details</a>` : nothing}
</li>`;

export function showSearch(ctx) {
    let shoes;
    const ownerId = ctx.user?._id;
    const isGuest = getUserData();
    ctx.render(searchTemplate(ownerId, shoes, createSubmitHandler(onSearch)));

    async function onSearch({ search }) {
        if (search == '') {
            return alert('Enter search paramater!');
        }

        shoes = await searchShoes(search);
        ctx.render(searchTemplate(ownerId, shoes, createSubmitHandler(onSearch)));
    }
}
