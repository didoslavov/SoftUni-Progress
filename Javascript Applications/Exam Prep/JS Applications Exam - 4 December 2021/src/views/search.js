import { searchItem } from '../api/data.js';
import { html, nothing } from '../lib.js';

const searchTemplate = (user, albums, onSearch) => html`<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" />
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">
        ${albums.length > 0 ? albums.map((x) => cardTemplate(x, user)) : html`<p class="no-result">No result.</p>`}
    </div>
</section> `;

const cardTemplate = (card, user) => html` <div class="card-box">
    <img src=${card.imgUrl} />
    <div>
        <div class="text-center">
            <p class="name">Name: ${card.name}</p>
            <p class="artist">Artist: ${card.artist}</p>
            <p class="genre">Genre: ${card.genre}</p>
            <p class="price">Price: $${card.price}</p>
            <p class="date">Release Date: ${card.releaseDate}</p>
        </div>
        ${user
            ? html`<div class="btn-group">
                  <a href="/details/${card._id}" id="details">Details</a>
              </div>`
            : nothing}
    </div>
</div>`;

export function showSearch(ctx) {
    const user = ctx.user;

    ctx.render(searchTemplate(user, [], onSearch));

    async function onSearch(e) {
        const search = e.target.previousElementSibling.value;
        if (search == '') {
            return alert('Enter search term!');
        }

        const albums = await searchItem(search);

        ctx.render(searchTemplate(user, albums, onSearch));
    }
}
