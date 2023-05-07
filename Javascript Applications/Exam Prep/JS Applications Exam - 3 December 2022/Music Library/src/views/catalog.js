import { getAllPosts } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (posts) => html` <section id="dashboard">
  <h2>Albums</h2>
  ${posts.length > 0
    ? html`<ul class="card-wrapper">
        ${posts.map(postTemplate)}
      </ul>`
    : html`<h2>There are no albums added yet.</h2>`}
</section>`;

const postTemplate = (post) => html`<li class="card">
  <img src=${post.imageUrl} alt="travis" />
  <p><strong>Singer/Band: </strong><span class="singer">${post.singer}</span></p>
  <p><strong>Album name: </strong><span class="album">${post.album}</span></p>
  <p><strong>Sales:</strong><span class="sales">${post.sales}</span></p>
  <a class="details-btn" href="">Details</a>
</li>`;

export async function catalogPage(ctx) {
  const posts = await loadPosts();

  ctx.render(catalogTemplate(posts));

  async function loadPosts() {
    return await getAllPosts();
  }
}
