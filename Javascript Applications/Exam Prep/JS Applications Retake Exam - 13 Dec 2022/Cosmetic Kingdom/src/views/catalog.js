import { getAllProducts } from '../api/data.js';
import { html, render } from '../lib.js';

const catalogTemplate = (products) => html` <h2>Products</h2>
  ${products.length > 0
    ? html`<section id="dashboard">${products.map(productTemplate)}</section>`
    : html`<h2>No products yet.</h2>`}`;

const productTemplate = (product, onDetails) => html`<div class="product">
  <img src="${product.imageUrl}" alt="example1" />
  <p class="title">${product.title}</p>
  <p><strong>Price:</strong><span class="price">$${product.price}</span>$</p>
  <a click=${onDetails} class="details-btn" href="/details/${product._id}">Details</a>
</div>`;

export async function catalogPage(ctx) {
  ctx.render(catalogTemplate(await getAllProducts(), onDetails));

  async function onDetails() {
    ctx.page.redirect('/details/' + ctx.params.id);
  }
}
