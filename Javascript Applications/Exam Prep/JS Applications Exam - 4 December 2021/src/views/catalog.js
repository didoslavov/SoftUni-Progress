import { getAll } from '../api/data.js';
import { html, nothing } from '../lib.js';

const catalogTemplate = (albums, user) => html`<section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.length > 0 ? albums.map((x) => cardTemplate(x, user)) : html`<p>No Albums in Catalog!</p>`}
</section>`;

const cardTemplate = (card, user) => html`<div class="card-box">
    <img src=${card.imgUrl} />
    <div>
        <div class="text-center">
            <p class="name">Name: ${card.name}</p>
            <p class="artist">Artist: ${card.artist}</p>
            <p class="genre">Genre: ${card.genre}</p>
            <p class="price">Price: $${card.price}</p>
            <p class="date">Release Date: ${card.releaseDate}</p>
        </div>
        <div class="btn-group">${user ? html`<a href="/details/${card._id}" id="details">Details</a></div>` : nothing}</div>
    </div>
</div>`;

export async function showCatalog(ctx) {
    const albums = await getAll();
    const user = ctx.user;

    ctx.render(catalogTemplate(albums, user));
}
